import { Schema, model } from 'mongoose';
import pkg from 'bcryptjs';
const { hash, compare } = pkg;


const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['super admin','admin','editor', 'customer', 'vendor'], default: 'customer' },
  isActive: { type: Boolean, default: true },
  emailVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 12);
  }
  this.updatedAt = Date.now();
  next();
});

userSchema.methods.isPasswordValid = async function (password) {
  return await compare(password, this.password);
};

const User = model('User', userSchema);
export default User;



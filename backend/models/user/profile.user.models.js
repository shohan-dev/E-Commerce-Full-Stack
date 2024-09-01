import { Schema, model } from 'mongoose';

const userProfileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String },
  profilePicture: { type: String },
  bio: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const UserProfile = model('UserProfile', userProfileSchema);
export default UserProfile;

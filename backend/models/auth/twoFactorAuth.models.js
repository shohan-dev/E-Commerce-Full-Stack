import { Schema, model } from 'mongoose';

const twoFactorAuthSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  secret: { type: String, required: true },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const TwoFactorAuth = model('TwoFactorAuth', twoFactorAuthSchema);
export default TwoFactorAuth;

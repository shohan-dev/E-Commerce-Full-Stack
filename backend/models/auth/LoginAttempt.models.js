import { Schema, model } from 'mongoose';

const loginAttemptSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  ipAddress: { type: String },
  attemptTime: { type: Date, default: Date.now },
  successful: { type: Boolean, default: false },
});

const LoginAttempt = model('LoginAttempt', loginAttemptSchema);
export default LoginAttempt;

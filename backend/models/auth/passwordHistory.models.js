import { Schema, model } from 'mongoose';

const passwordHistorySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  oldPasswordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const PasswordHistory = model('PasswordHistory', passwordHistorySchema);
export default PasswordHistory;

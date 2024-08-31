import { Schema, model } from 'mongoose';

const auditLogSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  details: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const AuditLog = model('AuditLog', auditLogSchema);
export default AuditLog;

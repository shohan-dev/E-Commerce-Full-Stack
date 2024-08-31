import { Schema, model } from 'mongoose';

const roleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  permissions: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

const Role = model('Role', roleSchema);
export default Role;

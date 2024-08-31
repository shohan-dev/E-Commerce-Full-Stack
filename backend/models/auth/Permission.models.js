import { Schema, model } from 'mongoose';

const permissionSchema = new Schema({
  role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
  resource: { type: String, required: true },
  actions: [{ type: String }], // e.g., ['read', 'write', 'delete']
  createdAt: { type: Date, default: Date.now },
});

const Permission = model('Permission', permissionSchema);
export default Permission;

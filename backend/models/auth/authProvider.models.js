import { Schema, model } from 'mongoose';

const oauthProviderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  providerName: { type: String, required: true },
  providerId: { type: String, required: true },
  accessToken: { type: String },
  refreshToken: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const OAuthProvider = model('OAuthProvider', oauthProviderSchema);
export default OAuthProvider;

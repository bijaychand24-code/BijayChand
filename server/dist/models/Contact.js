import mongoose, { Schema } from 'mongoose';
const ContactSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
});
export const Contact = mongoose.model('Contact', ContactSchema);
//# sourceMappingURL=Contact.js.map
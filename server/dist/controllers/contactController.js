import { z } from 'zod';
import mongoose from 'mongoose';
import { Contact } from '../models/Contact.js';
import { sendContactEmail } from '../utils/mailer.js';
const contactValidationSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(20, 'Message must be at least 20 characters'),
});
export const handleContactSubmit = async (req, res) => {
    try {
        const parseResult = contactValidationSchema.safeParse(req.body);
        if (!parseResult.success) {
            const issue = parseResult.error.issues[0];
            res.status(400).json({
                success: false,
                error: issue ? issue.message : 'Invalid request payload',
            });
            return;
        }
        const { name, email, subject, message } = parseResult.data;
        // Save to database if connected
        if (mongoose.connection.readyState === 1) {
            try {
                await Contact.create({ name, email, subject, message });
            }
            catch (dbErr) {
                console.error('Failed to persist contact submission in DB:', dbErr);
            }
        }
        // Attempt to send email
        await sendContactEmail({ name, email, subject, message });
        res.status(200).json({
            success: true,
            message: "Message received successfully! I'll get back to you soon.",
        });
    }
    catch (error) {
        console.error('Error handling contact submission:', error);
        res.status(500).json({
            success: false,
            error: 'An unexpected error occurred while processing your message.',
        });
    }
};
//# sourceMappingURL=contactController.js.map
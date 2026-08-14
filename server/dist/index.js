import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Security and middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Health Check Endpoint
app.get('/api/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'bijay-portfolio-server',
    });
});
// API Routes
app.use('/api/contact', contactRoutes);
// Error Handling Middlewares
app.use(notFoundHandler);
app.use(errorHandler);
// Connect Database & Start Server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Portfolio backend server listening on port ${PORT}`);
    });
});
//# sourceMappingURL=index.js.map
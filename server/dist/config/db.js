import mongoose from 'mongoose';
export const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!mongoURI) {
        console.warn('⚠️ MONGO_URI is not defined in environment variables. Running server without database connection.');
        return;
    }
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
        console.warn('⚠️ Continuing execution without MongoDB persistence.');
    }
};
//# sourceMappingURL=db.js.map
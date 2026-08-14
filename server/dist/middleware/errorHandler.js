export const notFoundHandler = (req, res) => {
    res.status(404).json({
        success: false,
        error: `Route not found - ${req.originalUrl}`,
    });
};
export const errorHandler = (err, _req, res, _next) => {
    console.error('Unhandled Server Error:', err);
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
        success: false,
        error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
    });
};
//# sourceMappingURL=errorHandler.js.map
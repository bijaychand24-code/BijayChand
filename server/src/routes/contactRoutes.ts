import { Router } from 'express';
import { handleContactSubmit } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/', contactRateLimiter, handleContactSubmit);

export default router;

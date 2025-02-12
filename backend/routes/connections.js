import express from 'express';
import {   deleteAllConnections, search, uploadLinkedInConnections } from '../controllers/connections.js';
import { attachmentsMulter } from '../middleware/multer.js';

const router = express.Router();

// Route for user signup
router.post('/upload',attachmentsMulter, uploadLinkedInConnections);
router.post('/search',search);
router.delete('/delete', deleteAllConnections);
export default router;

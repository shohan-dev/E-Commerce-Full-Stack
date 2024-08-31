import express  from 'express';
import { signup } from '../controller/auth.controller.js';

const router = express.Router();

router.get('/signup', signup );

export default router;
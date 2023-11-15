import express from 'express';
import { imageFileParser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/upload-image',imageFileParser)

export default userRouter
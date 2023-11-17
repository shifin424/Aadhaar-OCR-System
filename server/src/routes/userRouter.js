import express from 'express';
import { imageFileParser } from '../controllers/userController.js';
import upload from '../middlewares/multer/multer.js';


const userRouter = express.Router();

userRouter.post('/upload',upload.array("uploads"),imageFileParser)

export default userRouter
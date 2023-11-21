import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import errorHandler from './middlewares/errors/errorHandler.js';

const app = express()

app.use(
    cors({
      credentials: true,
      origin: ['https://aadhaarscan.netlify.app']
    })
  );

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(morgan("dev"));

app.use('/api/v1',userRouter)
app.use(errorHandler)


const port =  process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`The server connection is now established and running on port ${port}`)
})
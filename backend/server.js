import express, { response } from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from './routes/task.js';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 8080;

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

server
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(cors())
    .use('/task', taskRoutes)
    .get('/', () => response.send('Welcome To Todo API!')) 

    .listen(PORT, () => console.log(`Server is running on Port ${PORT}...`))
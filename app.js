import express from 'express';
import connectToDatabase from './src/config/connect.js';
import 'dotenv/config';


const app =express();
connectToDatabase();
const port = process.env.PORT;



app.listen(port || 3000, () => {
    console.log(`App listen on port ${port}`);
});
import express from 'express';
import 'dotenv/config';


const app =express();
const port = process.env.PORT;



app.listen(port || 3000, () => {
    console.log(`App listen on port ${port}`);
});
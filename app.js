import express from 'express';
import connectToDatabase from './src/config/connect.js';
import 'dotenv/config';
import registerRoute from './src/routes/register.js';
import loginRoute from './src/routes/login.js';


const app = express();
connectToDatabase();
const port = process.env.PORT;

app.use(express.json());

app.use('/register', registerRoute);
app.use('/login', loginRoute);



app.listen(port || 3000, () => {
    console.log(`App listen on port ${port}`);
});
import mongoose from "mongoose";
import 'dotenv/config';

async function connectToDatabse() {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connect Success");
    } catch(error) {
        console.log("Connect error:", error);
    }
};

export default connectToDatabse;
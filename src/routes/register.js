import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';

const router = express.Router();

router.post("/", async (req, res, next) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try {
        const sevedUser = await newUser.save();
        res.status(201).json(sevedUser);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router;
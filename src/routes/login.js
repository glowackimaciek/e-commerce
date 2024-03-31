import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';

const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json({message: "Wrong credencials"});

        const hashedPasseord = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const originalPassword = hashedPasseord.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json({message: "Wrong credencials"});

        const { password, ...others } = user._doc;

        res.status(200).json(others);
    } catch (error) {
        res.send(500).json(error);
    }
});

export default router;
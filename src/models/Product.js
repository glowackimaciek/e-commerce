import mongoose from "mongoose";

const ProductShema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        categories: {type: Array},
        szie: {type: String},
        color: {type: String},
        price: {type: Number, required: true},
    },
    {timestamps: true}
);

export default mongoose.model("Product", ProductShema);
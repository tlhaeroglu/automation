import mongoose from "mongoose";

const user = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    gender: Boolean
});

export default mongoose.model("user", user);
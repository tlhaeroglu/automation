import mongoose from "mongoose";

const user = new mongoose.Schema({
    email: {type: String, unique:true, required: true},
    username: {type: String, unique:true, required: true},
    password: {type: String, required: true},
    gender: {type: String, required: true}
});

export default mongoose.model("user", user);
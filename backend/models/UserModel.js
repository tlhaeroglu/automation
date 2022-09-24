import mongoose from "mongoose";
import validator from "../helpers/validator.js";

const user = new mongoose.Schema({
    email: {type: String, unique:true, required: true},
    username: {type: String, unique:true, required: true, validate: (value) =>validator.maxLength(value,20) },
    password: {type: String, required: true, validate: (value) =>validator.minLength(value,8)},
    gender: {type: String, required: true}, // Female,Male,N/A -> F,M,N
    userType: {type: String, required: true} // Student, Teacher , Oweber-> S,T,O
});

export default mongoose.model("user", user);
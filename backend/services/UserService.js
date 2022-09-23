import UserModel from "../models/UserModel.js";

export default {
   findAll : async() =>{
        return await UserModel.find();
    },
    create : async(model) =>{
        return await UserModel.create(model);
    },
}
import UserModel from "../models/UserModel.js";
const Model = UserModel;

export default {
   findAll : async() =>{
        return await Model.find();
    },
    create : async(model) =>{
        return await Model.create(model);
    },
    findById: async(id) =>{
        return await Model.find({_id: id});
    },
    updateById: async(id, model) =>{
        return await Model.findByIdAndUpdate(id, model, {runValidators: true});
    },
    deleteById: async(id) =>{
        return await Model.findByIdAndDelete(id);
    },
}
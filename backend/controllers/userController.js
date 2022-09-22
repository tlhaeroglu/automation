import UserModel from "../models/UserModel.js";

export const Index = async(req,res) =>{
    const users = await UserModel.find();
    console.log(users);
    res.json(users);
}

export const save = async(req,res) =>{
    let body = req.body;
    let user = new UserModel({username:body.username, password:body.password, gender:body.gender});
    user.save((err) =>{
        if (err) {res.send(err); return}
        res.send("ok");
    })
}
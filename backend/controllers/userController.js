import UserService from "../services/UserService.js";

export const Index = async(req,res) =>{
    try{
        const users= await UserService.findAll();
        res.json({data:users ,status:"success"});
    }catch(err){
        console.log(err)
        res.status(500).json({error:err});
    }
}

export const save = async(req,res) =>{
    try{
        const user= await UserService.create(req.body);
        res.json({data:user ,status:"success"});
    }catch(err){
        console.log(err)
        res.status(500).json({error:err});
    }
}
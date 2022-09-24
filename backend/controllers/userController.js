import UserService from "../services/UserService.js";
const Service = UserService;

export const Index = async(req,res) =>{
    try{
        const users= await Service.findAll();
        res.json({data:users ,status:"success"});
    }catch(err){
        console.log(err)
        res.status(500).json({error:err});
    }
}

export const save = async(req,res) =>{
    try{
        const user= await Service.create(req.body);
        res.json({data:user ,status:"success"});
    }catch(err){
        console.log(err)
        res.status(500).json({error:err});
    }
}

export const getUser = async(req,res) =>{
    try{
        const user= await Service.findById(req.params.id);
        res.json({data:user ,status:"success"});
    }catch(err){
        console.log(err)
        res.status(500).json({error:err});
    }
}

export const updateUser = async(req,res) =>{
    try{
        const user= await Service.updateById(req.params.id, req.body);
        res.json({data:user ,status:"success"});
    }catch(err){
        console.log(err)
        res.status(500).json({error:err});
    }
}

export const deleteUser = async(req,res) =>{
    try{
        const user= await Service.deleteById(req.params.id);
        res.json({data:user ,status:"success"});
    }catch(err){
        console.log(err)
        res.status(500).json({error:err});
    }
}
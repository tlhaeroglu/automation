import express from "express";

const router = express.Router();

router.get("/example", (req,res) =>{
    res.send("example");
});

export default router;
import express from "express";
import {Index, save} from "../controllers/userController.js"

const router = express.Router();

router.get("/", Index);

router.post("/",save);

export default router;
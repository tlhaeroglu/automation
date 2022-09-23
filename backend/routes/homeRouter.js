import express from "express";
import {Index, save} from "../controllers/userController.js"

const router = express.Router();

router.route("/").get(Index).post(save);

export default router;
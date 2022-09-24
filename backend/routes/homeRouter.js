import express from "express";
import {Index, save, getUser, updateUser, deleteUser} from "../controllers/userController.js"

const router = express.Router();

router.route("/").get(Index).post(save);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
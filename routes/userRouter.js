import express from "express";
import {
  addProfile,
  createPost,
  createUser,
  getUsersDataById,
  testuser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", testuser);
router.post("/create", createUser);
router.post("/addProfile", addProfile);
router.post("/createpost", createPost);
router.get("/getuserbyid/:id", getUsersDataById);

export { router as userRouter };

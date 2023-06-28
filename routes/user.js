import express from "express";
import { User } from "../models/user.js";
import { getAllUsers, register , findbyParam, login, getMyProfile, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.get("/userid/:id", findbyParam );

router.get("/me",isAuthenticated, getMyProfile);

router.get("/logout", logout );

router.post("/new", register );
router.post("/login", login );




export default router;

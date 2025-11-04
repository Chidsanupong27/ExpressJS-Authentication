import express from "express";
const router = express.Router();
//controllers
import { register, login } from "../controllers/auth.controller.js";
import { loginSchema, registerSchema, validate } from "../utils/validator.js";

//endpoint http://localhost:8000/auth/register
router.post("/register",validate(registerSchema), register);
router.post("/login",validate(loginSchema), login);

export default router;


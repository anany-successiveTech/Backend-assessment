import express from "express";
import { registerStudent, studentSignin } from "../controllers/students";
import validateStudent from "../utils/shcemaValidator/validateStudent";
import authenticate from "../middleware/authenticate"
const studentRouter = express.Router();

studentRouter.post("/register", validateStudent, registerStudent);
studentRouter.post("/signin", authenticate, studentSignin);
studentRouter.get("/");

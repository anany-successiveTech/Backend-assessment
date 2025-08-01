import { NextFunction, Request, Response } from "express";
import validateStudent from "../utils/shcemaValidator/validateStudent";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export const checkStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentAge, studentEmail, studentGrade, studentName } = req.body;
    const validateResult = validateStudent(req.body);
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        message: "Bad Request!",
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Unauthorized student",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

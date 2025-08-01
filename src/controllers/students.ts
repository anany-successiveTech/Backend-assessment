import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import Student from "../models/student";
import dotenv from "dotenv";
import { IStudent } from "../interfaces/student";
import { faker } from '@faker-js/faker';
dotenv.config();

const createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}


const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export const registerStudent = async (req: Request, res: Response) => {
  try {
    const { studentName, studentAge, studentGrade, studentEmail }: IStudent =
      req.body;

    const existingStudent = await Student.findOne({ studentEmail });

    if (existingStudent) {
      return res.status(404).json({
        message: "Student already exist, please try login",
      });
    }

    const studentData = await Student.create({
      name: studentName,
      age: studentAge,
      grade: studentGrade,
      email: studentEmail,
      createdAt: new Date().toLocaleDateString(),
    });

    export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
    return res.status(201).json({
      status: true,
      message: "student Created successfully",
      data: studentData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const studentSignin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const isStudentExist = await Student.findOne({ email });
    if (!isStudentExist) {
      return res.status(404).json({
        message: "Student not Found",
      });
    }
    const token = jwt.sign(
      { email: email, id: isStudentExist._id },
      JWT_SECRET_KEY
    );
    return res.status(200).json({
      status: true,
      message: "Student login successfull",
      data: isStudentExist,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const filterStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params;
    const foundStudent = await Student.findById({ _id: studentId });
  } catch (error) {
     return res.status(505).json({
        message:"Internal server error!"
    })
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const foundStudent = await Student.findOne({ email });
    if (!foundStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }
    const deletedStudent = await Student.deleteOne({ email });
    return res.status(206).json({
      status: true,
      message: "Student record deleted successfully",
      data: deletedStudent,
    });
  } catch (error) {
    return res.status(505).json({
        message:"Internal server error!"
    })
  }
};

export const UpdateStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params;
    const foundStudent = await Student.findById({ _id: studentId });
  } catch (error) {}
};

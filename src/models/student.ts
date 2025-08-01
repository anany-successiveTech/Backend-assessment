import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 30,
    trim: true,
  },
  age: {
    type: Number,
    trim: true,
    maxlength: 100,
    require: true,
  },
  grade: {
    type: String,
    require: true,
    maxlength: 2,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    trim: true,
  },
});

const Student = mongoose.model("StudentSchema", studentSchema);
export default Student;

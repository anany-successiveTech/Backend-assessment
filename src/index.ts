import express from "express";
import bodyParser from "body-parser";
import { connectDb } from "./db.config";
import cors from 'cors'
import dotenv from "dotenv";
import studentRouter from "./routes/studentRoutes";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3200;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION_URL as string;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing will come here.

app.use('/api/v1', studentRouter)

// Mongodb connection establishment

connectDb(MONGO_CONNECTION).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});

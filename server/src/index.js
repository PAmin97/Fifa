// import libraries
import express from "express"; // serves frontend
import cors from "cors"; // set up rules between frontend and backend
import mongoose from "mongoose"; // makes the connection to the RDBMS (MongoDB)

import PlayerInfoRouter from "./routes/PlayerInfo.js";

// generate version of API
const app = express();

// convert all recieved data into json
app.use(express.json());
app.use(cors());

app.use("/info", PlayerInfoRouter);

// create the connection to our database on MongoDB called FifaDB
mongoose.connect("mongodb://localhost:27017/FifaDB");

app.listen(3001, () => console.log("Sever started"));

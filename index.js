import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { signJWT, verifyJWT } from "./Utils/jwt.js";

import { ConnectMongoDb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";
import UserRoute from "./Routes/user.js"

dotenv.config();
const app= express();

app.use(cors());
app.use(express.json());

ConnectMongoDb();

app.use("/url", URLRoute);
app.use("/user", UserRoute);


app.listen(5050,() => {
    console.log("i am working");
});


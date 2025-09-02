import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { signJWT, verifyJWT } from "./Utils/jwt.js";

import { ConnectMongoDb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";

dotenv.config();
const app= express();

app.use(cors());
app.use(express.json());

ConnectMongoDb();

app.use("/url", URLRoute);



app.listen(5050,() => {
    console.log("i am working");
});

signJWT({
    name:"hassnain",
    userID:"1234",

});

verifyJWT(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFzc25haW4iLCJ1c2VySUQiOiIxMjM0IiwiaWF0IjoxNzU2NzEyMjQ2LCJleHAiOjE3NTY3MTIzMDZ9.vPgaywymAuIFcnYil37fQRVZBbtCcs6QF50NiCiwVZo"
);
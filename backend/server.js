import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

// express app
const app = express()
app.use(cookieParser());

// middleware
app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



// app.get("/", (req, res) => {
//   res.send('Hello World!');
// })

const PORT = process.env.PORT || 8000;
app.listen(PORT ,()=>{
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
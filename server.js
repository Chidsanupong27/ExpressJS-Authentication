// const express = require('express') //commonjs
import express from "express";
import cors from "cors";
import morgan from "morgan";
//routing
import authRoute from "./routes/auth.route.js";

const app = express();

//midlewares
app.use(cors()); //allows cross domains
app.use(morgan("dev")); //show logs
app.use(express.json())//for read json
//routing
app.use("/auth", authRoute);

//error handing
// การจัดการ error 
app.use((err, req, res, next) => {
    
    // console.log(err)

  res.status(err.code || 500).json({ message: err.message || "somting wrong" });
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

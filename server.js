// const express = require('express') //commonjs
import express from "express";
import cors from "cors";
import morgan from "morgan";
//routing
import authRoute from './routes/auth.route.js'


const app = express();

//midlewares
app.use(cors()); //allows cross domains
app.use(morgan("dev")); //show logs

//routing
app.use('/auth' , authRoute)



const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

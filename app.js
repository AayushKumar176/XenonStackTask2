require("dotenv").env
const express= require('express');
const app=express();
// const mongoose =require("mongoose");
require("./db/conn");
const cookieParser= require('cookie-parser');
const Products= require("./models/productsSchema");
const DefaultData=require("./defaultdata");
const cors= require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// // Use cors middleware with options
// const corsOptions = {
//     origin: 'https://6498441b7290f10e11e795a2--scintillating-muffin-9630b5.netlify.app', // Replace with your frontend domain
//     credentials: true, // Allow credentials (cookies, authorization headers)
//   };
  
//   app.use(cors(corsOptions)); // Apply CORS middleware with options

const router=require("./routes/router");
app.use(router);

const port=process.env.PORT || 8005;

app.listen(port, ()=>{
    console.log(`Server is running on port number at ${port}`)
})

DefaultData();
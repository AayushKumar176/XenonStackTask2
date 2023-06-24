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

const router=require("./routes/router");
app.use(router);

const port=process.env.PORT || 8005;

app.listen(port, ()=>{
    console.log(`Server is running on port number at ${port}`)
})

DefaultData();
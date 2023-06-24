const mongoose =require("mongoose");
// const DB = process.env.DATABASE;

const DB= "mongodb+srv://aayush176:aa123456@cluster0.ciznksk.mongodb.net/Ecommerce?retryWrites=true&w=majority";
// console.log(DB)
mongoose.connect(DB).then(()=>console.log("Data base connected")).catch((error)=> console.log("error " + error.message));


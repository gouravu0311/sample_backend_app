//Yaha par server start hota hai  
// import express from "express";
//  import dotenv from "dotenv"; 
//  dotenv.config();   //read the .env variables
// const app = express();
// const port = 2000;

// const server = app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${port}` );
// });


// app.get("/", (req, res) => {
//     res.send("HELLO THIS IS MY FIRST BACKEND DEPLOYMENT");
// });

// app.get("/login",(req,res)=>{
// res.send('<a href="http://www.google.com">Google</a>');
// });

// app.get("/Instagram",(req,res)=>{
//     res.send('<a href="https://www.instagram.com/_gourav_0311">My Instagram</a>');
// });

// app.get("error",(err)=>{
//     console.log("server error",error);
// });
import dotenv from "dotenv"; 
 dotenv.config();
import app from "./src/app.js";

app.listen(process.env.PORT,()=>{
console.log(`Server is running on port ${process.env.PORT}`)
});
app.get("./",(req,res)=>{
    res.send("Root page achieved");
});
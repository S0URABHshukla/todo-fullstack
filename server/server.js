const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const connection=require("./configs/db")
dotenv.config();
const app=express();


const port=process.env.PORT;
app.listen(port,()=>
{
    connection();
    console.log(`server is running on ${port}`);
})


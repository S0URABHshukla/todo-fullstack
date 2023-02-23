const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const router=require("./routes/todo.routes")
const connection=require("./configs/db")
const cors=require('cors')

dotenv.config();
const app=express();
app.use(express.json())
app.use(router)
app.use(cors())

const port=process.env.PORT;
app.listen(port,()=>
{
    connection();
    console.log(`server is running on ${port}`);
})


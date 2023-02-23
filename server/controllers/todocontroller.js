const todoModel=require("../models/todo.model");

const getTodo= async(req,res)=>
 {
    const todo= await todoModel.find();
    res.status(200).send(todo);
 }

const saveTodo=async(req,res)=>
 {
    const {text}=req.body
    todoModel.create({text}).then((data)=>
    {
        res.send(data);
    })
 }

 const updateTodo=async(req,res)=>
 {
    const {_id,text}=req.body;
    todoModel.findByIdAndUpdate(_id,{text}).then(()=>res.send("update successfully"))
 }

 const deleteTodo=async(req,res)=>
 {
    const {_id}=req.body;
    todoModel.findByIdAndDelete(_id).then(()=>res.send("delete successfully"))
 }
 module.exports={getTodo,saveTodo,updateTodo,deleteTodo};
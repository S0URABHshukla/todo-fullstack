const todoModel=require("../models/todo.model");

module.exports.getTodo= async(req,res)=>
 {
    const todo= await todoModel.find();
    res.status(200).send(todo);
 }

 module.exports.saveTodo=async(req,res)=>
 {
    const {text}=req.body
    todoModel.create({text}).then((data)=>
    {
        res.send(data);
    })
 }
//  module.exports={getTodo,saveTodo};
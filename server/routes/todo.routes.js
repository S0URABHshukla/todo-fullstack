const Router=require('express');
const { saveTodo, getTodo } = require('../controllers/todocontroller');
const router=Router();

router.get("/",getTodo)
router.post("/save",saveTodo)

module.exports=router;

const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const dotenv=require('dotenv')
dotenv.config();
const connection=async()=>
{
    await mongoose.connect(process.env.MONGODB_URL)
}

module.exports=connection;
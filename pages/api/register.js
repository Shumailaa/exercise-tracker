import User from '@/database/models/users';
import dbConnect from '../../database/dbConnect'
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"


export default async function register(req,res) {
    dbConnect.connect();
 const { user_name, email ,password }=req.body;
if(!email||!password||!user_name){
    console.log(req.body)
    console.log("api ka data");
    return res.status(404).json({success:false,msg:"Fieled are required"})
    }
try{
const findUser=await User.findOne({email:email});
if(findUser){
    return res.status(302).json({success:false,message:'email already exist'})}
const passwordHash=await bcrypt.hash(password,10);
const createUser=await User.create({user_name:user_name,email:email,password:passwordHashed})
if(!created){return res.status(404).json({success:false,message:'Register Failed'})}
return res.status(201).json({success:true,message:'Successfully Registered',data:createUser})
} catch (error) {
    return res.status(500).json({success:false,message:'server error'})
}
   
}




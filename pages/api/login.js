import User from '@/database/models/users';
import dbConnect from '../../database/dbConnect'
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"


export default async function login(req,res) {
 dbConnect.connect();
const { email,password }=req.body;
if(!email,!password){
    return res.status(404).json({success:false,msg:"Fields are required"})
    }
try{
const findUser=await User.findOne({email:email});
if(!findUser){
    res.status(404).json({success:false,msg:"Incorrect email or password"})
}

const check=await bcrypt.compare(password,findUser.password)
if(!check){
    res.status(404).json({success:false,msg:"Incorrect email or password"})
   }

   const payload = {
    user: {
        id: findUser._id
    }
}

const jwtToken=jwt.sign(payload, process.env.jwtSecretKey, {
    expiresIn: 360000
}, (err, token) => {
    if (err) throw err;
    res.json({ token })
});
return res.status(200).json({success:true,msg:"Logged in successfully",token:jwtToken,data:findUser})

}
catch(err){
   return res.status(500).json({success:false,msg:err.message})

}



}





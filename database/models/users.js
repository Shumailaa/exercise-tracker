import mongoose from'mongoose';// library to easily validate schema

const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true // validation
    },
    password:{
        type:String,
        required:true
    },
 
    date:{
        type:Date,
        default:Date.now() // if empty so  will take the current date
    }
})
const User =mongoose.models.user||mongoose.model('user',userSchema);  //'user' collection name
export default User;
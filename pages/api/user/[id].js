import {addUser,getAllUsers} from '../../../controller/users'
import dbConnect from '../../../database/dbConnect';

export default async function handler(req,res){
    await dbConnect.connect();
    const {method} = req;
    switch (method) {
        case 'GET':
            getAllUsers(req,res)
            break;
        case 'POST':
            addUser(req,res)
            break;
        
        default:
            res.status(404).json({success:false,message:'Something went wrong'})
            break;
    }
}
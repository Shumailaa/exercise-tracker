import {addTrack,deleteTrack,getAllTracks,getTrack,updateTrack} from '../../../controller/tracks'
import dbConnect from '../../../database/dbConnect';

export default async function handler(req,res){
    await dbConnect.connect();
    const {method} = req;
    switch (method) {
        case 'GET':
            getAllTracks(req,res)
            break;
        case 'POST':
            addTrack(req,res)
            break;
        
        default:
            res.status(404).json({success:false,message:'Wrong'})
            break;
    }
}
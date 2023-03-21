import {deleteTrack,getTrack,updateTrack} from '../../../controller/tracks'
import dbConnect from '../../../database/dbConnect';

export default async function handler(req, res) {
    await dbConnect.connect();
    const { method } = req;
    switch (method) {
        case 'DELETE':
            deleteTrack(req, res);
            
            break;
        case 'PATCH':
            updateTrack(req, res);
            break;
        case 'GET':
            getTrack(req, res);
            break;
        default:
            res.send({ status: false, message: 'Could\'nt make request' });
            break;
    }
}
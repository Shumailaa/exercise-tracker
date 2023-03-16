import {deleteUser,getUser,updateUser} from '../../../controller/users'
import dbConnect from '../../../database/dbConnect';

export default async function handler(req, res) {
    await dbConnect.connect();
    const { method } = req;
    switch (method) {
        case 'DELETE':
            deleteUser(req, res);
            break;
        case 'PATCH':
            updateUser(req, res);
            break;
        case 'GET':
            getUser(req, res);
            break;
        default:
            res.send({ status: false, message: 'Could\'nt make request' });
            break;
    }
}
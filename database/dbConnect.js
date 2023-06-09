import mongoose from "mongoose";


const connection = {}

async function connect() {
    const db = await mongoose.connect("mongodb+srv://shumaila:mTNR402ctoKS4ouY@cluster0.uzc9m3g.mongodb.net/exercise?retryWrites=true&w=majority");
    console.log('new connection');
    connection.isConnected = db.connections[0].readyState;


    if (connection.isConnected) { console.log('already connected'); return; }

    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState
        if (connection.isConnected === 1) {
            console.log('use previous connection');
            return;
        }
        await mongoose.disconnect();
    }
   
}

async function disconnect() { 
    if(connection.isConnected){
        if(process.env.NODE_ENV === 'production'){
            await mongoose.disconnect();
            connection.isConnected = false;
        }
    }
}


const dbConnect = { connect, disconnect }
export default dbConnect
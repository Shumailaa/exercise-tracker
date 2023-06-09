import mongoose from'mongoose';
const Schema=mongoose.Schema;

const TrackSchema=new Schema({
    description:{
        type:String,
        required:true,
    },
    activity:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
    }
  
})
const Track=mongoose.models.track||mongoose.model('track',TrackSchema);
export default Track;
import jwt from "jsonwebtoken";
import Track from "../database/models/tracks";


export const getAllTracks = async (req, res) => {
  try {
    const token = req.query.token;
    const verified = jwt.verify(token, process.env.jwtSecretKey);
    const allTracks = await Track.find({user:verified.user.id}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: allTracks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTrack = async (req, res) => {
  const { trackId } = req.query;
  console.log("controller id",trackId);
  try {
    const track = await Track.findById(trackId);
    console.log("controler track",track);
    res.status(200).json({ success: true, data: track });
  } catch (error) {
    console.log("Controller message",error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addTrack = async (req, res) => {
  const { description, activity, duration, date } = req.body;
  if ( !description && !activity && !duration && !date) {
    return res
      .status(404)
      .json({ success: false, message: "Fields are required" });
  }
  try {
    const token = req.cookies.token;
    const verified = await jwt.verify(token, process.env.jwtSecretKey);
    console.log("Add track",verified.user.id)
    console.log("Add track token",token)
    console.log(process.env.jwtSecretKey);
    const created = await Track.create({
      description,
      activity,
      duration,
      date,
      user: verified.user.id,
    });
    if (!created) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to Create Activity" });
    }
   
    res.status(201).json({ success: true, message: "Activity Created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const deleteTrack = async (req, res) => {
  const {trackId}  = req.query;

  try {
    const track = await Track.findByIdAndDelete(trackId);
   console.log("track delete wala",track)
   
    return res.status(200).json({ success: true, message: 'Activity deleted' });
  } catch (err) { res.status(500).json({ success: false, message: "err.name" }) }
};
export const updateTrack = async (req, res) => {
  const { trackId } = req.query;
  try {
    const updated = await Track.findByIdAndUpdate(trackId, req.body, { new: true });
    if (!updated) { return res.status(404).json({ success: false, message: 'Activity not updated' }) }
    return res.status(200).json({ success: true, message: 'Activity updated', data: updated });
  } catch (err) { res.status(500).json({ success: false, message: err.name }) }
};

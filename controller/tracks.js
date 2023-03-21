import jwt from "jsonwebtoken";
import Track from "../database/models/tracks";
// import User from "../database/models/users";

export const getAllTracks = async (req, res) => {
  try {
    const token = req.query.token;
    const { id } = jwt.verify(token, process.env.jwtSecretKey);
    const allTracks = await Track.find({userId:id}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: allTracks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTrack = async (req, res) => {
  const { id } = req.query;
  try {
    const track = await Track.findById(id);
    res.status(200).json({ success: true, data: track });
  } catch (error) {
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
    const { id } = jwt.verify(token, process.env.jwtSecretKey);
    const created = await Track.create({
      user: id,
      description,
      activity,
      duration,
      date,
    });
    if (!created) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to Create Activity" });
    }
    // const exercisesUpdated = await User.findByIdAndUpdate(
    //   tokenVerification.id,
    //   { $push: { exercises: created._id } },
    //   { new: true }
    // );
    // console.log(exercisesUpdated);
    res.status(201).json({ success: true, message: "Activity Created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const deleteTrack = async (req, res) => {
  const {trackId}  = req.query;

  try {
    const track = await Track.findByIdAndDelete(trackId);
   
    if (!track) { return res.status(404).json({ success: false, message: 'Activity not deleted' }) }
    return res.status(200).json({ success: true, message: 'Activity deleted', data: track });
  } catch (err) { res.status(500).json({ success: false, message: err.name }) }
};
export const updateTrack = async (req, res) => {
  const { trackId } = req.query;
  try {
    const updated = await Track.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) { return res.status(404).json({ success: false, message: 'Activity not updated' }) }
    return res.status(200).json({ success: true, message: 'Activity updated', data: updated });
  } catch (err) { res.status(500).json({ success: false, message: err.name }) }
};

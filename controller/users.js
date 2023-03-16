import User from "../database/models/users";
import Track from "../database/models/tracks";
import bcrypt from 'bcrypt'
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    if (!users) { return res.status(404).json({ status: false, message: 'Not Found' }) }
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await User.findById(id);
    if (!user) { return res.status(404).json({ status: false, message: 'Not Found' }) }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addUser = async (req, res) => {
  const { user_name, email, password } = req.body;
  if (!user_name && !email && !password) {
    return res
      .status(404)
      .json({ success: false, message: "Fields are required" });
  }
  try {
    const created = await User.create(req.body);
    if (!created) {
      return res
        .status(400)
        .json({ success: false, message: "User not created" });
    }
    res.status(201).json({ success: true, message: "User Created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) { return res.status(404).json({ status: false, message: 'Not found' })}
    const trackDeleted = await Track.deleteMany({userId:id})
    console.log(trackDeleted);
    return res.status(200).json({ success: true, message: 'User deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }) }
};

export const updateUser = async (req, res) => {
  const { id } = req.query;
  const { user_name, email, password, newpassword } = req.body;
  if (!user_name && !email && !password) {
    return res
      .status(404)
      .json({ success: false, message: "Fields are required" });
  }
  try {
    const exist = await User.findById(id);
    console.log(exist);
    if (!exist) { return res.status(404).json({ status: false, message: 'Not found' }) }
    const compared = await bcrypt.compare(password, exist.password)
    if (!compared) { return res.status(400).json({ status: false, message: 'Incorrect Password' }) }
    if (newpassword) {
      const newEncrypted = await bcrypt.hash(newpassword,10);
      const user = await User.findByIdAndUpdate(id, { user_name: user_name, email: email, password: newEncrypted }, { new: true });
      
      if (!user) { return res.status(404).json({ status: false, message: 'Could not update' }) }
      return res.status(200).json({ success: true, message: 'User updated', data: user });
    }

    const user = await User.findByIdAndUpdate(id, {user_name: user_name, email: email} , { new: true });
    

    if (!user) { return res.status(404).json({ status: false, message: 'Could not update' }) }
    return res.status(200).json({ success: true, message: 'User updated', data: user });
    

  } catch (err) { res.status(500).json({ success: false, message: err.message }) }
};

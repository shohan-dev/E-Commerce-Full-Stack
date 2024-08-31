import User from "../models/auth/user.models.js";

// signup
export const signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    console.log(token);
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};
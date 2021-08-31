import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import validateUser from "../helpers/validateUser.js";

const getUser = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email, user_state: true }).select({
    username: 1,
    email: 1,
    contacts: 1,
  });
  res.json(user);
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  const { error } = validateUser(username, email, password);
  if (error) {
    return res.status(400).json(error);
  }

  const user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(400)
      .json({ error: "ok", message: "User or email incorrect" });
  }

  const userRecord = await new User({
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 10),
  });
  userRecord.save();
  res
    .json({
      message: "User was created!",
    });
};

const updateUser = async (req, res, next) => {
  const {username, email, password} = req.body
  const { error } = validateUser(username, email, password);
  if (error) {
    return res.status(400).json(error);
  }

  const result = await User.updateOne(
    { email: body.email },
    {
      $set: {
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),
      },
    }
  );
  res.json(result);
};

async function deactivateUser(email) {
  const result = await User.updateOne(
    { email: email },
    {
      $set: {
        user_state: false,
      },
    }
  );
  return result;
}

export { createUser, getUser, updateUser, deactivateUser };

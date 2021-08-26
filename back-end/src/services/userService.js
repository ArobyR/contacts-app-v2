const User = require("../models/user_model");
const bcrypt = require("bcrypt");

const creteUser = async (body) => {
  const userRecord = await new User({
    username: body.username,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
  });
  return userRecord.save();
};

const getUser = async (email) => {
  const user = await User.findOne({ email: email, user_state: true }).select({
    username: 1,
    email: 1,
    contacts: 1
  });
  return user;
};

const updateUser = async (body) => {
  const result = await User.updateOne(
    { email: body.email },
    {
      $set: {
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),
      },
    }
  );
  return result;
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

module.exports = {
  creteUser,
  getUser,
  updateUser,
  deactivateUser
};

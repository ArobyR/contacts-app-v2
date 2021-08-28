import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken";

const authUser = async (body) => {
  const user = await User.findOne({ email: body.email });
  if (user && bcrypt.compareSync(body.password, user.password)) {
    const jwtoken = jwt.sign(
      {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
      },
      config.get("configToken.SEED"),
      { expiresIn: config.get("configToken.expiration") }
    );

    return {
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      jwtoken,
    };
  } else {
    return {
      error: "ok",
      message: "User or password incorrect",
    };
  }
};

export default authUser;

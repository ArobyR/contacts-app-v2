const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: String,
  user_state: {
    type: Boolean,
    default: true,
  },
  contacts: [
    {
      type: Schema.Types.ObjectId,
      ref: "contact",
    },
  ],
});

module.exports = mongoose.model("user", UserSchema);

import mongoose from "mongoose"
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
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

export default mongoose.model("user", UserSchema);

import mongoose from "mongoose"
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Invalid value"]
  },
  email: {
    type: String,
    required: [true, "Invalid value"],    
    unique: true,
    dropDups: true
  },
  password: {
    type: String,
    required: [true, "Invalid value"]
  },
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

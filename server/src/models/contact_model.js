import mongoose from "mongoose";
const Schema = mongoose.Schema;

const contactSchema = mongoose.Schema({
  name_contact: {
    type: String,
    min: [1, "Must be at least 1"],
    max: 30,
  },
  phone: {
    type: String,
    min: [6, "Must be at least 6"],
    max: 30,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

export default mongoose.model("contact", contactSchema);

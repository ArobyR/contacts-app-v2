import mongoose from "mongoose";
const Schema = mongoose.Schema;

const contactSchema = mongoose.Schema({
  name_contact: String,
  phone: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

export default mongoose.model("contact", contactSchema);

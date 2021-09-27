import Contact from "../models/contact_model.js";
import User from "../models/user_model.js";

const createContact = async (body, id) => {
  const contactRecord = await new Contact({
    name_contact: body.name_contact,
    phone: body.phone,
  });
  const user = await User.findById({ _id: id });
  contactRecord.user = user;
  await contactRecord.save();
  user.contacts.push(contactRecord);
  await user.save();
  return contactRecord;
};

const getContactsByUser = async (id) => {
  const contacts = await Contact.find({ user: id }).populate(
    "user",
    "name_contact phone"
  );
  return contacts;
};

const updateContact = async (id, body) => {
  const contactUpdated = await Contact.updateOne(
    { _id: id },
    {
      $set: {
        name_contact: body.name_contact,
        phone: body.phone,
      },
    }
  );
  return contactUpdated;
};

const deactivateContact = async (id) => {
  const result = await Contact.deleteOne({ _id: id });
  const user = await User.updateOne(
    { contacts: id },
    { $pull: { contacts: [id] } }
  );
  return user;
};

export { createContact, getContactsByUser, updateContact, deactivateContact };

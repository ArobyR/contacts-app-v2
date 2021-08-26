const Contact = require("../models/contact_model");
const User = require("../models/user_model");

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
  const contacts = await Contact.find({
    contact_state: true,
    user: id,
  }).populate("user", "name_contact phone contact_state");
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
  )
  return contactUpdated;
};

module.exports = {
  createContact,
  getContactsByUser,
  updateContact
};

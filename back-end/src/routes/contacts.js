const express = require("express");
const route = express.Router();
const {
  createContact,
  getContactsByUser,
  updateContact
} = require("../services/contactService");

route.get("/:id", async (req, res) => {
  const phones = await getContactsByUser(req.params.id);
  res.json(phones)
});

route.post("/:id", async (req, res) => {
  const result = await createContact(req.body, req.params.id);
  res.json(result);
});

route.put("/phone/:id", async (req, res) => {
    const result = await updateContact(req.params.id, req.body)
    res.json(result)
})

module.exports = route;

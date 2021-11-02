import express from "express";
import tokenValidation from "../middlewares/auth.js";
import {
  createContact,
  deactivateContact,
  getContactsByUser,
  updateContact,
} from "../services/contactService.js";

const route = express.Router();

route.get("/:id", tokenValidation, async (req, res) => {
  const phones = await getContactsByUser(req.params.id);
  res.json(phones);
});

route.post("/:id", tokenValidation, async (req, res) => {
  const contact = await createContact(req.body, req.params.id);
  res.json(contact);
});

route.put("/phone/:id", tokenValidation, async (req, res) => {
  const contactUpdated = await updateContact(req.params.id, req.body);
  res.json(contactUpdated);
});

route.delete("/:id", tokenValidation, async (req, res) => {
  const result = await deactivateContact(req.params.id);
  res.json(result);
});

export default route;

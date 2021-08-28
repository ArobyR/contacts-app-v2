import express from "express";
import tokenValidation from "../middlewares/auth.js"
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
  const result = await createContact(req.body, req.params.id);
  res.json(result);
});

route.put("/phone/:id", tokenValidation, async (req, res) => {
  const result = await updateContact(req.params.id, req.body);
  res.json(result);
});

route.delete("/:id", tokenValidation, async (req, res) => {
  const result = await deactivateContact(req.params.id)
  res.json(result)
})

export default route;

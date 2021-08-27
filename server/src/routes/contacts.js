import express from "express";
import {
  createContact,
  getContactsByUser,
  updateContact,
} from "../services/contactService.js";

const route = express.Router();

route.get("/:id", async (req, res) => {
  const phones = await getContactsByUser(req.params.id);
  res.json(phones);
});

route.post("/:id", async (req, res) => {
  const result = await createContact(req.body, req.params.id);
  res.json(result);
});

route.put("/phone/:id", async (req, res) => {
  const result = await updateContact(req.params.id, req.body);
  res.json(result);
});

export default route;

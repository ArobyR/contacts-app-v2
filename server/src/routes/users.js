import express from "express";
import { getUser, createUser } from "../services/userService.js";

const route = express.Router();

route.get("/:email", async (req, res) => {
  const user = await getUser(req.params.email);
  res.json(user);
});

route.post("/", async (req, res) => {
  const result = await createUser(req.body);
  res.json(result);
});

export default route;

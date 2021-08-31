import express from "express";
import { getUser, createUser } from "../services/userService.js";

const route = express.Router();

const use = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

route.get("/:email", use(getUser));

route.post("/", use(createUser));

export default route;

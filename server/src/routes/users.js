import express from "express";
import { createUser } from "../services/userService.js";

const route = express.Router();

const use = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

route.post("/", use(createUser));

export default route;

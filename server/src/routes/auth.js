import express from "express";
import authUser from "../services/authService.js";

const route = express.Router();

route.post("/", async (req, res) => {
  const result = await authUser(req.body);
  if (result.error) {
    res.status(400).json(result);
  } else {
    res.json(result);
  }
});

export default route;

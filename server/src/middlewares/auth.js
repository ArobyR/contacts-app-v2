import jwt from "jsonwebtoken";
import config from "config";

const tokenValidation = (req, res, next) => {
  const token = req.get("Auth");
  jwt.verify(token, config.get("configToken.SEED"), (err, decoded) => {
    if (err) return res.status(401).json(err);
    req.user = decoded.user;
    next();
  });
};

export default tokenValidation;

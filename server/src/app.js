import express from "express";
import mongoose from "mongoose";
import config from "config";
import cors from "cors";
import userRoute from "./routes/users.js";
import contactRoute from "./routes/contacts.js";
import authRoute from "./routes/auth.js";
import { error404, errorHandler } from "./middlewares/erros.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/contacts", contactRoute);
app.use("/auth", authRoute);
app.use(error404)
app.use(errorHandler);

mongoose
  .connect(config.get("configDB.HOST"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.log("Can't connected to DB...\n", err));

app.listen(config.get("configServer.PORT"), () => {
  console.log(
    `#### 🛡️ Server listening on port: ${config.get(
      "configServer.PORT"
    )} 🛡️ ####`
  );
});

const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const userRoute = require("./routes/users");
const contactRoute = require("./routes/contacts")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoute);
app.use("/api/contacts", contactRoute)

// connection
mongoose
  .connect(config.get("configDB.HOST"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.log("Can't connected to DB...\n", err));

app.listen(config.get("configServer.PORT"), () => {
  console.log(
    `#### 🛡️ Server listening on port: ${config.get("configServer.PORT")} 🛡️ ####`
  );
});

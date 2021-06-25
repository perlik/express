const express = require("express");
const app = express();
const config = require("./config");

//routes
const apiRouter = require("./routes/api");
app.use("/", apiRouter);

// server
app.listen(config.port, () => {
  console.log("listening");
});

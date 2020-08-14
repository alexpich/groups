const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", function (req, res) {
  res.send("welcome");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
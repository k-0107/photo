const path = import("path");
const express = import("express");
const app = express();
// const mongoose = require("mongoose");
const Photo = import("./models/photos");
const cors = import("cors");

// mongoose
//   .connect("mongodb://localhost:27017/photo")
//   .then(() => {
//     console.log("MongoDBコネクションOK!");
//   })
//   .catch((err) => {
//     console.log("MongoDBコネクションエラー!");
//     console.log(err);
//   });
var router = express.Router();

app.use(cors());

// Hello Worldを返却するAPI
router.get("/", function (req, res, next) {
  res.json({ message: "Hello World" });
});

module.exports = router;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log(path.join(__dirname, "../../learn-react/dist"));

app.use(
  "/photo",
  express.static(path.join(__dirname, "../../learn-react/dist"))
);

app.listen(8080, (req, res) => {
  console.log("ポート8080で待機中...");
});

app.get("/photo", (req, res) => {
  res.render("photo");
});

app.get("/api/v1/", (req, res) => {
  const response = {
    result: "ok",
    api_level: 1,
    version: { "photo-project": "0.0.1" },
  };

  res.json(response);
});

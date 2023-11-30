const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Photo = require("./models/photos");

// mongoose
//   .connect("mongodb://localhost:27017/photo")
//   .then(() => {
//     console.log("MongoDBコネクションOK!");
//   })
//   .catch((err) => {
//     console.log("MongoDBコネクションエラー!");
//     console.log(err);
//   });

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

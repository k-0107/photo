import path from "path";
import express from "express";
import mongoose from "mongoose";
import Photo from "../src/models/photos.mjs";
const __dirname = path.resolve();
const app = express();

mongoose
  .connect("mongodb://localhost:27017/photo")
  .then(() => {
    console.log("MongoDBコネクションOK!");
  })
  .catch((err) => {
    console.log("MongoDBコネクションエラー!");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

console.log(__dirname);

app.use("/photo", express.static(path.join(__dirname, "../learn-react/dist")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/message", (req, res) => {
  console.log(req.body);
  res.json(req.body);

  const photo_test = new Photo({
    message: req.body.message,
  });

  photo_test
    .save()
    .then((photo_test) => {
      console.log(photo_test);
    })
    .catch((e) => {
      console.log(e);
    });
});

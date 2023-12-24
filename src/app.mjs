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

app.get("/api/v1/", (req, res) => {
  const response = {
    result: "ok",
    api_level: 1,
    version: { "photo-project": "0.0.1" },
  };

  res.json(response);
});

app.get("/api/v1/message", async (req, res) => {
  try {
    const photos = await Photo.find({});
    console.log(photos);
    res.json({ result: 0, data: photos });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

app.post("/api/v1/message", async (req, res) => {
  try {
    const photo_test = new Photo({
      message: req.body.message,
      date: new Date(),
    });

    const savedPhoto = await photo_test.save();

    res.json({
      result: 0,
      data: { date: savedPhoto.date, message: savedPhoto.message },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ result: 1, error: "Failed to save message" });
  }
});

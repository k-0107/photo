import path from "path";
import express from "express";
const __dirname = path.resolve();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log(__dirname);

app.use("/photo", express.static(path.join(__dirname, "learn-react/dist")));

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

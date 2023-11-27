const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photosSchema = new Schema({
  title: String,
  description: String,
  location: String,
});

const Photo = mongoose.model("Photo", photosSchema);

module.exports = Photo;

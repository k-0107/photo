import mongoose from "mongoose";
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  message: String,
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;

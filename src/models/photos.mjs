import mongoose from "mongoose";
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  message: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;

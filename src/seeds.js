const mongoose = import("mongoose");
const Photo = import("./models/photos");

mongoose
  .connect("mongodb://localhost:27017/photo")
  .then(() => {
    console.log("MongoDBコネクションOK!");
  })
  .catch((err) => {
    console.log("MongoDBコネクションエラー!");
    console.log(err);
  });

const p = new Photo({
  title: "赤い花",
  description: "テスト",
  location: "札幌市",
});

p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });

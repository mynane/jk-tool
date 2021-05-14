const compressing = require("compressing");
const fs = require("fs");
const mv = require("mv");
mv("./build/dist/index.html", "./build/index.html", { mkdir: false }, () => {
  console.log(123123);
  fs.writeFileSync("./build/package.json", fs.readFileSync("./package.json"));
  compressing.zip
    .compressDir("./build", "build.zip")
    .then(() => {
      console.log("success");
    })
    .catch((err) => {
      console.error(err);
    });
});

const express = require("express");
const app = express();
const prod = require("./output.json");

app.get("/", function (req, res) {
  let category = prod.filter(
    (ele) =>
      ele.Colour === req.query.category || ele.Size === req.query.category
  );
  res.json(category);
});

app.listen(5000, function () {
  console.log("Server is listening on port 5000. Ready to accept requests!");
});

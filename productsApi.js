const express = require("express");
const app = express();
const products = require("./output.json");

app.get("/products", function (req, res) {
  let category = products.filter(
    (product) =>
      product.Colour === req.query.category || product.Size === req.query.category
  );
  res.json(category);
});

app.listen(5000, function () {
  console.log("Server is listening on port 5000. Ready to accept requests!");
});

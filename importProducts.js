const csv = require("csv-parser");
const fs = require("fs");
const express = require("express");
const app = express();

let arrayOfProducts = [];
//read the csv file and create data to store in Json file
const createFile = (count) => {
  {
    fs.createReadStream("products.csv")
      .pipe(csv())
      .on("data", (row) => {
        if (count === 0) {
          arrayOfProducts.push(row);
        }
      })
      .on("end", () => {
        if (count === 0) {
          console.log("CSV file successfully processed");
          let json = JSON.stringify(arrayOfProducts);
          fs.writeFileSync("output.json", json);

          let allPrimaryKeys = arrayOfProducts.map((ele, index) => {
            return ele["SKU"];
          });
          let duplicateRecords = allPrimaryKeys.filter(
            (ele, index) => allPrimaryKeys.indexOf(ele) !== index
          );

          console.log(
            `Number of rows imported ${
              arrayOfProducts[arrayOfProducts.length - 1]["SKU"]
            }
Number of products created ${
              arrayOfProducts[arrayOfProducts.length - 1]["SKU"] -
              (arrayOfProducts.filter(
                (ele) => ele["Colour"] === "" || ele["Size"] === ""
              ).length +
                duplicateRecords.length)
            }
Number of products updated 0
Number of products unchanged 0          
Number of rows skipped ${
              arrayOfProducts.filter(
                (ele) => ele["Colour"] === "" || ele["Size"] === ""
              ).length + duplicateRecords.length
            }`
          );
        }

        if (count !== 0) {
          console.log("***************");
          const fs = require("fs");

          let rawdata = fs.readFileSync("output.json");
          let products = JSON.parse(rawdata);

          let allPrimaryKeys = products.map((ele, index) => {
            return ele["SKU"];
          });
          let duplicateRecords = allPrimaryKeys.filter(
            (ele, index) => allPrimaryKeys.indexOf(ele) !== index
          );

          // console.log(b);
          console.log(
            `number of rows imported ${
              products[products.length - 1]["SKU"]
            }         
number of products created ${
              products[products.length - 1]["SKU"] -
              (products.filter(
                (ele) => ele["Colour"] === "" || ele["Size"] === ""
              ).length +
                duplicateRecords.length) -
              (arrayOfProducts[arrayOfProducts.length - 1]["SKU"] -
                (arrayOfProducts.filter(
                  (ele) => ele["Colour"] === "" || ele["Size"] === ""
                ).length +
                  duplicateRecords.length))
            }
Number of products updated 0
Number of products unchanged ${
              products[products.length - 1]["SKU"] -
              (products.filter(
                (ele) => ele["Colour"] === "" || ele["Size"] === ""
              ).length +
                duplicateRecords.length)
            }
Number of rows skipped ${
              arrayOfProducts.filter(
                (ele) => ele["Colour"] === "" || ele["Size"] === ""
              ).length + duplicateRecords.length
            }`
          );
        }
      });
  }
};

for (let i = 0; i <= 2; i++) {
  createFile(i);
}

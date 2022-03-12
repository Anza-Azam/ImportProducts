// const csv = require("csv-parser");
// const fs = require("fs");
// const express = require("express");
// const app = express();

// let arrayOfProducts = [];
// //read the csv file and create data to store in Json file
// const createFile = (count) => {
//   {
//     fs.createReadStream("products.csv")
//       .pipe(csv())
//       .on("data", (row) => {
//         if (count === 0) {
//           arrayOfProducts.push(row);
//         }
//       })
//       .on("end", () => {
//         if (count === 0) {
//           console.log("CSV file successfully processed");
//           let json = JSON.stringify(arrayOfProducts);
//           fs.writeFileSync("output.json", json);

//           let allPrimaryKeys = arrayOfProducts.map((product, index) => {
//             return product["SKU"];
//           });
//           let duplicateRecords = allPrimaryKeys.filter(
//             (product, index) => allPrimaryKeys.indexOf(product) !== index
//           );

//           console.log(
//             ` 
//             Number of rows imported ${
//               arrayOfProducts[arrayOfProducts.length - 1]["SKU"]
//             }
//             Number of products created ${
//               arrayOfProducts[arrayOfProducts.length - 1]["SKU"] -
//               (arrayOfProducts.filter(
//                 (product) => product["Colour"] === "" || product["Size"] === ""
//               ).length +
//                 duplicateRecords.length)
//             }
//             Number of products updated 0
//             Number of products unchanged 0          
//             Number of rows skipped ${
//               arrayOfProducts.filter(
//                 (product) => product["Colour"] === "" || product["Size"] === ""
//               ).length + duplicateRecords.length
//             }`
//           );
//         }

//         if (count !== 0) {
//           console.log("******************************************************");
         

//           let rawdata = fs.readFileSync("output.json");
//           let products = JSON.parse(rawdata);

//           let allPrimaryKeys = products.map((product, index) => {
//             return product["SKU"];
//           });
//           let duplicateRecords = allPrimaryKeys.filter(
//             (product, index) => allPrimaryKeys.indexOf(product) !== index
//           );

//           console.log(
//             `
//             Number of rows imported ${
//               products[products.length - 1]["SKU"]
//             }         
//             Number of products created ${
//               products[products.length - 1]["SKU"] -
//               (products.filter(
//                 (product) => product["Colour"] === "" || product["Size"] === ""
//               ).length +
//                 duplicateRecords.length) -
//               (arrayOfProducts[arrayOfProducts.length - 1]["SKU"] -
//                 (arrayOfProducts.filter(
//                   (product) =>
//                     product["Colour"] === "" || product["Size"] === ""
//                 ).length +
//                   duplicateRecords.length))
//             }
//             Number of products updated 0
//             Number of products unchanged ${
//               products[products.length - 1]["SKU"] -
//               (products.filter(
//                 (product) => product["Colour"] === "" || product["Size"] === ""
//               ).length +
//                 duplicateRecords.length)
//             }
//             Number of rows skipped ${
//               arrayOfProducts.filter(
//                 (product) => product["Colour"] === "" || product["Size"] === ""
//               ).length + duplicateRecords.length
//             }`
//           );
//         }
//       });
//   }
// };

// for (let iteration = 0; iteration <= 2; iteration++) {
//   createFile(iteration);
// }





const sortArray = (array) => {
  for (let j = 0; j < array.length; j++) {

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp
        swapped = true;
      }

    }

  
}
 console.log(array);
}

sortArray([5, 23, 19, 7]);



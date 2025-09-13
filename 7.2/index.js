// Local Module (Common js style) -----------------------

// const add = require("./local-1.js");

const { a, add } = require("./local-1.js"); // we can destructure as well

const { a: a2, add: add2 } = require("./local-2.js"); // as both params are same, so we use name alias

// console.log(add.add(3, 5));
// console.log(add(2, 3));
// console.log(add2(2, 3, 4));

// Build-in Module --------------------
const path = require("path");

// console.log(
//   path.parse(
//     "/D:/Web-Developer Journey/Level 2(Last Try to Get My Peace)/Mongoose Master/7.2/index.js"
//   )
// );

// console.log(
//   path.join(
//     "/D:/Web-Developer Journey/Level 2(Last Try to Get My Peace)/Mongoose Master/",
//     "7.2/index.js"
//   )
// );

const {utils} = require("./utils.js")
const main = () => {
  try {
    utils([1,2,3])
  } catch (err) {
    console.log(err);
  }
};

exports.main = main;
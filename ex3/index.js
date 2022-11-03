// Load the module
const moment = require("moment");

// Display current date
console.log(moment().format("dddd, MMMM Do YYYY"));

// Compute number of years since 1976, November 26th
console.log(moment([1976, 11, 26]).fromNow());

const mongoose = require("mongoose");
const db_name = "smartpump3";

module.exports = (db_name) => {
    
    mongoose.connect("mongodb://localhost/smartpump3")
    .then(() => {
        console.log(`Successfully connected to ${db_name}`);
    })
    .catch((err) => {
        console.log("mongoose connection failed: ", err);


});  
};
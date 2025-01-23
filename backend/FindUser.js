const mongoose = require("mongoose");
const UserModel = require("../backend/model/UserModel");
// const UserSchemas = require ("..schemas/UserSchemas");

mongoose.connect("mongodb+srv://secretaim95006:Dbdj4Sx5CNIYmH8m@cluster0.jv5o4.mongodb.net/mydb");
  
UserModel.find({name : "jyoti"})
// UserModel.findById("6784d338c0ab045bf4a5dae2")

  .then(data => {
    if (data.length == 0) {
      console.log("No record found");
      mongoose.disconnect();
      return;
    }
    console.log(data);
    mongoose.disconnect();
  })
  .catch(err => {
    console.log(err);
    mongoose.disconnect();
  });







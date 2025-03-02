const mongoose = require('mongoose');
// const UserModel = require('./model/UserModel');
mongoose.connect('mongodb+srv://secretaim95006:Dbdj4Sx5CNIYmH8m@cluster0.jv5o4.mongodb.net/mydb');


const { Schema } = mongoose;

const UserSchemas = new Schema({
    name: "string",
    email: "string",
    password: Number,
});

const UserModel = mongoose.model('user', UserSchemas);

const user1 = new UserModel({
    name: "Aradhya",
    email: "exampl3@gamil.com",
    password: 123456
});

user1.save().then(() => {
    console.log("user saved");
}).catch((err) => {
    console.log("error", err);
});
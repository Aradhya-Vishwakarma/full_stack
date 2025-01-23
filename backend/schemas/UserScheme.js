// const mongoose = require("mongoose")
// const { Schema } = mongoose;

//  const UserSchema = new Schema({

//     name: string,
//     email: string,
//     phone : Number
// })

// module.exports = userSchema ;




const mongoose = require("mongoose")
const { Schema } = mongoose;
const userSchema = new Schema({
    name: String,
    email: String,
    phone: Number
})
module.exports = userSchema


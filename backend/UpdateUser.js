const mongoose = require("mongoose" )
const UserModel = require("./model/UserModel")
mongoose.connect("mongodb+srv://secretaim95006:Dbdj4Sx5CNIYmH8m@cluster0.jv5o4.mongodb.net/mydb")

UserModel.findByIdAndUpdate("678624a23b81a115d5b60b57"  , {name : "jyoti"})
.then(data => {
    console.log("data updated !! \data :", data)
    mongoose.disconnect()
})
.catch(err => {
    console.log(" err" , err )
    mongoose.disconnect();

})
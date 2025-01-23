const mongoose = require("mongoose" )
const UserModel = require("./model/UserModel")
mongoose.connect("mongodb+srv://secretaim95006:Dbdj4Sx5CNIYmH8m@cluster0.jv5o4.mongodb.net/mydb")

UserModel.deleteMany({ name: "Arika", email: "788487485757exampl3@gamil.com"}   )
.then(data => {
    console.log("data deleted !! \n data :", data)
    mongoose.disconnect()       
})
.catch((err )=> {
    console.log(" err" , err )
    mongoose.disconnect();

})

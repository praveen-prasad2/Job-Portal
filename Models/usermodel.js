const { default: mongoose } = require("mongoose");
const userSignupSchema = new mongoose.Schema({
    fullName:{type:String,maxLength:200,default:"New User"},eMail:{type:String,maxLength:30},phoneNo:{type:String,maxLength:15,maxLength:100},password:{type:String,minlength:8},workStatus:{type:String}
})

const UserModel =mongoose.model('signup',userSignupSchema)

module.exports=UserModel
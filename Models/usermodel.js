const { default: mongoose } = require("mongoose");
const userSignupSchema = new mongoose.Schema({
    
    fullName:{
        type:String,
        maxLength:200,
        required:true
    },
    eMail:{
        type:String,
        maxLength:30,
        unique:true,
        required:true
    },
    phoneNo:{
        type:String,
        maxLength:15,
        maxLength:100,
        required:true
    },
    password:{
        type:String,
        minlength:8,
        required:true
    },
    workStatus:{
        type:String,
        required:true
    },
    about:{
        type:String
    },
    qualification:{
        type:String
    },
    skills:{
        type:String
    },
    experience:{
        type:String
    },
    jobCategory:{
        type:String
    },
    languages:{
        type:String
    },
    updated:{
        type:Boolean,
        default:false
    }
})

const UserModel =mongoose.model('user',userSignupSchema)

module.exports=UserModel
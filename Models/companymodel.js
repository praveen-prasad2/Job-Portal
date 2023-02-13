const {default:mongoose} = require('mongoose')

const companySignupSchema=new mongoose.Schema({
    empName:{
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
    companyType:{
        type:String,
        required:true
    },
    about:{
        type:String
    },
    address:{
        type:String
    },
    mission:{
        type:String,
    },
    vision:{
        type:String
    },
    updated:{
        type:Boolean,
        default:false
    }


    })

    const companyModel=mongoose.model('company',companySignupSchema)

    module.exports=companyModel
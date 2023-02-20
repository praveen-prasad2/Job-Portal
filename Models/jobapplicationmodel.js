const { application } = require('express')
const {default:mongoose} =require('mongoose')

const jobApplicationSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    jobId:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    companyId:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    appliedDate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'applied'
    }
})

const jobapplicationmodel=mongoose.model("jobapplication",jobApplicationSchema)
module.exports=jobapplicationmodel
const {default:mongoose}=require('mongoose')

const addJobSchema=new mongoose.Schema({
    title:{
        type:String,
        maxLength:100,
        required:true
    },
    description:{
        type:String,
        maxLength:400,
        required:true
    },
    qualification:{
        type:String,
        maxLength:400,
        required:true
    },
    vacancy:{
        type:Number,
        maxLength:400,
        required:true
    },
    salary:{
        type:Number,
        maxLength:400,
        required:true
    },
    eexperience:{
        type:String,
        maxLength:400,
        required:true
    },
    companyId:{
        type:String,
        maxLength:400,
        required:true
    },
    companyName:{
        type:String,
        maxLength:400,
        required:true
    },
    datePosted:{
        type:String,
        maxLength:400,
        required:true
    },
    lastDate:{
        type:String,
        maxLength:400,
        required:true
    },
    jobType:{
        type:String,
        maxLength:400,
        required:true
    },
    status:{
        type:String,
        maxLength:400,
        required:true
    },


})

const jobmodel=mongoose.model('job',addJobSchema)
module.exports=jobmodel
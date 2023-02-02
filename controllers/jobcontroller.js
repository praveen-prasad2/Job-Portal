const jobmodel=require("../Models/jobmodel")
const bcrypt=require('bcrypt')


const jobPage=function(req,res,next){
    res.render('company/addjob')
    // console.log(req.body);
}

const addJob=function(req,res,next){
    if(req.session.company){
        res.render('company/addjob')
    }else{
        res.redirect('/company/login')
    }
}


module.exports={jobPage,addJob}
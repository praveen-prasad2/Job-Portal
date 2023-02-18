const jobmodel=require("../Models/jobmodel")
const bcrypt=require('bcrypt')


const jobPage=function(req,res,next){
    res.render('company/addjob')
    // console.log(req.body);
}

const addJob=async function(req,res,next){
    if(req.session.company){
        req.body.companyId=req.session.company._id
        req.body.companyName=req.session.company.empName
        req.body.datePosted=new Date().toDateString()
        await jobmodel.create(req.body)
        res.redirect('company/home')
    }else{
        res.redirect('/company/login')
    }
}

const companyJobView=async (req,res,next) =>{
    if(req.session.company){
    let jobs=await jobmodel.find({companyId:req.session.company._id})
    res.render("company/viewjobs",{jobs})
}else{
    res.redirect('/company/login')
}
    
}
const userJobView=async (req,res,next)=>{
        let jobs=await jobmodel.find({status:'posted'})
        res.render('user/viewjobs',{jobs})
 
}
   
module.exports={jobPage,addJob,companyJobView,userJobView}
const UserModel = require("../Models/usermodel")
const jobApplicationModel=require('../Models/jobapplicationmodel')
const bcrypt = require('bcrypt');
const jobmodel = require("../Models/jobmodel");
const jobapplicationmodel = require("../Models/jobapplicationmodel");


const renderIndex = function (req, res, next) {
  res.render('index', { title: 'JOB PORTAL' });
}


const homePage = function (req, res, next) {
  console.log(req.session);
  if(req.session.user){
    res.render('user/home',{user : req.session.user})
  }else{
    res.redirect('/login')
  }
  
}

const signupPage = function (req, res, next) {
  if(req.session.alertMsg){
    let {alertMsg}=req.session
 res.render('user/signup', {alertMsg})
}else{
  res.render('user/signup')
}

}

const doSignup = async function (req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10)
    let data = await UserModel.create(req.body)
    res.redirect("/login")
  } catch (error) {
    console.log(error)
    req.session.alertMsg="signup failed retry"
    res.redirect("/signup")
  }
}

// LOGIN PAGE 


const loginPage = function (req, res, next) {
  res.render('user/login', { title: 'Login', name: 'Praveen', data: { id: 1, value: 2 } })

}

const doLogIn = async function (req, res, next) {
  const user = await UserModel.findOne({ eMail: req.body.eMail })
  if (user) {
    const userExist = await bcrypt.compare(req.body.password, user.password)
    if (userExist) {
      req.session.user=user
      res.redirect('/home')
    } else {
      res.redirect('/login')
    }
  } else {
    res.redirect("/login")
  }
}

const updateProfile= function(req,res,next){
  res.render('user/updateprofile')
}

const doUpdate=async function(req,res,next){
  req.body.updated=true
 let updatedUser=   await UserModel.findOneAndUpdate({eMail:req.session.user.eMail},req.body,{new:true})
    await req.files.image.mv(`./public/user/${req.session.user._id}.jpg`)
    await req.files.resume.mv(`./public/resume/${req.session.user._id}.pdf`)
    req.session.user=updatedUser  
    res.redirect('/viewprofile')
  
}


const viewProfile=async function(req,res,next){
    let profile=await UserModel.findOne({eMail:req.session.user.eMail})
    res.render('user/viewprofile',{profile})
}


const applyJob=async function(req,res,next){
  const job =await jobmodel.findOne({_id:req.params.id})
  let body={
    userId:req.session.user._id,
    userName:req.session.user.fullName,
    jobId:job._id,
    jobTitle:job.title,
    companyId:job.companyId,
    companyName:job.companyName,
    appliedDate:new Date().toDateString()
  }
  console.log(body)
  let application=await jobApplicationModel.create(body)
  res.redirect('/home')
 
}

const viewApplications=async function(req,res,next){
  const jobapplication=await jobapplicationmodel.find({userID:req.session.user._Id})
  console.log(jobapplication)
  res.render("user/viewapplications",{jobapplication})
}




module.exports = { renderIndex, loginPage, homePage, signupPage, doSignup, doLogIn,updateProfile,doUpdate,viewProfile,applyJob,viewApplications }
const companyModel=require("../Models/companymodel")
const bcrypt=require('bcrypt')
const jobapplicationmodel = require("../Models/jobapplicationmodel")
const UserModel = require("../Models/usermodel")


const homePage=function(req,res,next){
    res.render('company/home')
}


const signupPage=function(req,res,next){
    res.render('company/signup',{form:'enter empname'})
}

const doSignup=async function(req,res,next){
    try {
        req.body.password=await bcrypt.hash(req.body.password,10)
        let data=await companyModel.create(req.body)
        res.redirect("/company/login")
    } catch (error) {
        console.log(error);
    }
}

// LOGIN 

const loginPage=function (req,res,next){
    res.render('company/login')
}

const doLogin=async function(req,res,next){
    const company=await companyModel.findOne({eMail:req.body.eMail})
    if(company){
        const companyExist=await bcrypt.compare(req.body.password,company.password)
        if(companyExist){
            req.session.company=company
            res.redirect('/company/home')
        }else{
            res.redirect('/company/login')
        }
    }else{
        res.redirect('/company/login')
    }
}

const doLogout=async function(req,res,next){
   delete  req.session.company 
    res.redirect('/company/login')
}


const updateProfile=function(req,res,next){
    res.render('company/updateprofile')
}

const doUpdate=async function(req,res,next){
    if(req.session.company){
   let updatedCompany=     await companyModel.findOneAndUpdate({eMail:req.session.company.eMail},req.body,{new:true})
    await req.files.companyimage.mv(`./public/company/${req.session.company._id}.jpg`)
    req.session.company=updatedCompany
    res.redirect('/company/viewprofile')

        
    }else{
        res.redirect('/company/login')

    }

}

const viewcmpProfile=async function(req,res,next){
    let profile=await companyModel.findOne ({eMail:req.session.company.eMail})
    res.render('company/viewprofile',{profile})
}

const userApplications=async function(req,res,next){
    const applications=await jobapplicationmodel.find({companyId:req.session.company._id})
    console.log(applications);
    let appliedjobs=applications.filter((x)=>x.status=="applied")
    let acceptedjobs=applications.filter((x)=>x.status=="accepted")
    let rejectedjobs=applications.filter((x)=>x.status=="rejected")
    console.log(acceptedjobs)
    console.log(appliedjobs)
    console.log(rejectedjobs)
    res.render('company/userapplications',{applications,appliedjobs,acceptedjobs,rejectedjobs})
}

const userProfile=async function(req,res,next){
    const profiles=await UserModel.findOne({_id:req.params.id})
    res.render('company/userprofile',{profiles})
}

const acceptprofile = async function (req, res, next) {
    const accept = await jobapplicationmodel.findOneAndUpdate({ _id: req.params.id }, { status: "accepted" })
    console.log(accept);
    res.redirect('/company/userapplications')
}
const rejectprofile = async function (req, res, next) {
    const reject = await jobapplicationmodel.findOneAndUpdate({ _id: req.params.id }, { status: "rejected" })
    res.redirect('/company/userapplications')
}

const editCmpprofile=async function(req,res,next){
    const profilecmp=await companyModel.findOne({eMail:req.session.company.eMail},req.body,{new:true})
    console.log(profilecmp)
    res.render('company/editprofile',{profilecmp})
}

const docmpEdit=async function(req,res,next){
let profiletoedit=await companyModel.findOneAndUpdate({eMail:req.session.company.eMail},req.body,{new:true})
res.redirect('/company/viewprofile')
}


module.exports={signupPage,doSignup,loginPage,doLogin,homePage,updateProfile,doUpdate,viewcmpProfile,userApplications,userProfile,acceptprofile,rejectprofile,doLogout,editCmpprofile,docmpEdit}
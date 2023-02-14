const companyModel=require("../Models/companymodel")
const bcrypt=require('bcrypt')


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


const updateProfile=function(req,res,next){
    res.render('company/updateprofile')
}

const doUpdate=async function(req,res,next){
    if(req.session.company){
        await companyModel.findOneAndUpdate({eMail:req.session.company.eMail},req.body)
    await req.files.companyimage.mv(`./public/company/${req.session.company._id}.jpg`)
        
    }else{
        res.redirect('/company/login')
    }
}

module.exports={signupPage,doSignup,loginPage,doLogin,homePage,updateProfile,doUpdate}
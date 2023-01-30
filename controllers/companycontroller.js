const companyModel=require("../Models/companymodel")
const bcrypt=require('bcrypt')





const signupPage=function(req,res,next){
    res.render('company/signup',{form:'enter empname'})
}

const doSignup=async function(req,res,next){
    try {
        req.body.password=await bcrypt.hash(req.body.password,10)
        let data=await companyModel.create(req.body)
        res.redirect("/login")
    } catch (error) {
        console.log(error);
    }
}

module.exports={signupPage,doSignup}
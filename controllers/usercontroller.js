const UserModel=require("../Models/usermodel")



const renderIndex=function(req, res, next) {
    res.render('index', { title: 'JOB PORTAL' });
  }

const loginPage=function(req,res,next){
    res.render('user/login',{title:'Login' ,name:'Praveen',data:{id:1,value:2}})
  
  }

  const homePage=function(req,res,next){
    res.render('user/home',{title:'melcow'})
  }

const signupPage=function (req,res,next){
    res.render('user/signup',{form:'enter username'})
}

const doSignup=async function(req,res,next){
  try {
    let  data = await UserModel.create(req.body)
    res.send("Success")
  } catch (error) {
    console.log(error)
  }
}



  module.exports={renderIndex,loginPage,homePage,signupPage,doSignup}
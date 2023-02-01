const UserModel = require("../Models/usermodel")
const bcrypt = require('bcrypt')


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




module.exports = { renderIndex, loginPage, homePage, signupPage, doSignup, doLogIn }
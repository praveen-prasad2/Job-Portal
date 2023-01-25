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




  module.exports={renderIndex,loginPage,homePage,signupPage}
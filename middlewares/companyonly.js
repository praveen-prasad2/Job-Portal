const companyOnly=(req,res,next)=>{
    if(req.session.company){
        next()
    }else{
        res.redirect('/company/login')
    }
}

module.exports=companyOnly
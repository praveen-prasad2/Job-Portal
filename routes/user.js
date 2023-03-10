const { Router } = require('express');
var express = require('express');
const { userJobView } = require('../controllers/jobcontroller');
const { renderIndex, loginPage, homePage, signupPage, doSignup, doLogIn, updateProfile, doUpdate, viewProfile, applyJob, viewApplications, doLogOut, showEditPage, doEdit } = require('../controllers/usercontroller');
var router = express.Router();
const userOnly=require('../middlewares/useronly')

/* GET home page. */
router.get('/',renderIndex)
router.get('/home',homePage)
router.get('/signup',signupPage)
router.post('/signup',doSignup)

// LOGIN PAGE 

router.get('/login',loginPage)
router.post('/login',doLogIn)

router.get('/viewjobs',userJobView)


router.get('/updateprofile',userOnly, updateProfile)
router.post('/updateprofile',userOnly,doUpdate)

router.get('/logout',doLogOut)

router.get('/viewprofile',userOnly,viewProfile)

router.get('/applyjob/:id',userOnly, applyJob)
router.get('/viewapplications',userOnly,viewApplications)

router.get('/editprofile',userOnly,showEditPage)
router.post('/editprofile',userOnly,doEdit)



module.exports = router;

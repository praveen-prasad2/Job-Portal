var express = require('express');
const { doSignup, signupPage, loginPage, doLogin ,homePage, updateProfile, doUpdate, viewcmpProfile} = require('../controllers/companycontroller');
const { jobPage, addJob, companyJobView } = require('../controllers/jobcontroller');
const companyOnly = require('../middlewares/companyonly');
var router = express.Router();

router.get('/signup',signupPage)
router.post('/signup',doSignup)
router.get('/home',homePage)


router.get('/login',loginPage)
router.post('/login',doLogin)

router.get('/addjob',jobPage) 
router.post('/addjob',addJob)
router.get('/viewjobs',companyJobView)

router.get('/updateprofile',updateProfile)
router.post('/updateprofile',doUpdate)

router.get('/viewprofile',companyOnly,viewcmpProfile)


module.exports = router;

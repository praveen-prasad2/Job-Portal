var express = require('express');
const { doSignup, signupPage, loginPage, doLogin ,homePage} = require('../controllers/companycontroller');
const { jobPage, addJob, companyJobView } = require('../controllers/jobcontroller');
var router = express.Router();

router.get('/signup',signupPage)
router.post('/signup',doSignup)
router.get('/home',homePage)


router.get('/login',loginPage)
router.post('/login',doLogin)

router.get('/addjob',jobPage) 
router.post('/addjob',addJob)
router.get('/viewjobs',companyJobView)

module.exports = router;

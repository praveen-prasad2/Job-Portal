var express = require('express');
const { doSignup, signupPage, loginPage, doLogin ,homePage, updateProfile, doUpdate, viewcmpProfile, userApplications, userProfile, acceptprofile, rejectprofile, doLogout, editCmpprofile, docmpEdit} = require('../controllers/companycontroller');
const { jobPage, addJob, companyJobView, deleteJob, jobEditPage, editJob } = require('../controllers/jobcontroller');
const companyOnly = require('../middlewares/companyonly');
var router = express.Router();

router.get('/signup',signupPage)
router.post('/signup',doSignup)
router.get('/home',companyOnly, homePage)


router.get('/login',loginPage)
router.post('/login',doLogin)

router.get('/logout',doLogout)

router.get('/addjob',jobPage) 
router.post('/addjob',addJob)
router.get('/viewjobs',companyJobView)

router.get('/updateprofile',updateProfile)
router.post('/updateprofile',doUpdate)

router.get('/viewprofile',companyOnly,viewcmpProfile)

router.get('/userapplications',companyOnly, userApplications)


router.get('/acceptprofile/:id', companyOnly, acceptprofile )
router.get('/rejectprofile/:id', companyOnly, rejectprofile)

router.get('/deletejob/:id',deleteJob)

router.get('/editjob/:id',jobEditPage)
router.post('/editjob/:id',editJob)

router.get('/editprofile',companyOnly,editCmpprofile)
router.post('/editprofile',companyOnly,docmpEdit)

module.exports = router;

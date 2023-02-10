var express = require('express');
const { userJobView } = require('../controllers/jobcontroller');
const { renderIndex, loginPage, homePage, signupPage, doSignup, doLogIn, updateProfile, doUpdate } = require('../controllers/usercontroller');
var router = express.Router();

/* GET home page. */
router.get('/',renderIndex)
router.get('/home',homePage)
router.get('/signup',signupPage)
router.post('/signup',doSignup)

// LOGIN PAGE 

router.get('/login',loginPage)
router.post('/login',doLogIn)

router.get('/viewjobs',userJobView)


router.get('/updateprofile',updateProfile)

router.post('/updateprofile',doUpdate)



module.exports = router;

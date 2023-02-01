var express = require('express');
const { doSignup, signupPage, loginPage, doLogin ,homePage} = require('../controllers/companycontroller');
var router = express.Router();

router.get('/signup',signupPage)
router.post('/signup',doSignup)
router.get('/home',homePage)


router.get('/login',loginPage)
router.post('/login',doLogin)

module.exports = router;

var express = require('express');
const { renderIndex, loginPage, homePage, signupPage, doSignup, doLogIn } = require('../controllers/usercontroller');
var router = express.Router();

/* GET home page. */
router.get('/',renderIndex)
router.get('/home',homePage)
router.get('/signup',signupPage)
router.post('/signup',doSignup)

// LOGIN PAGE 

router.get('/login',loginPage)
router.post('/login',doLogIn)

module.exports = router;

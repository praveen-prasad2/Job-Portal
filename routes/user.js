var express = require('express');
const { renderIndex, loginPage, homePage, signupPage } = require('../controllers/usercontroller');
var router = express.Router();

/* GET home page. */
router.get('/',renderIndex)
router.get('/login',loginPage)
router.get('/home',homePage)
router.get('/signup',signupPage)



module.exports = router;

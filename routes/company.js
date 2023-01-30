var express = require('express');
const { doSignup, signupPage } = require('../controllers/companycontroller');
var router = express.Router();

router.get('/signup',signupPage)
router.post('/signup',doSignup)

module.exports = router;

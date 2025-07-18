const express = require('express');
const router = express.Router();
const { signup, login, checkEmail } = require('../controllers/auth.controller');
const { reserevationForm } = require('../controllers/reserve.controller');
router.post('/signup', signup);

router.post('/login', login);

router.post('/ReservataionForm', reserevationForm);

router.post('/check-email', checkEmail);

module.exports = router;

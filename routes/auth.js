const express = require('express')
const router = express.Router()

// Login page
router.get('/login', (req, res) => {
    res.render('login2')
})

// Register page
router.get('/register', (req, res) => {
    res.render('register2')
})

module.exports = router

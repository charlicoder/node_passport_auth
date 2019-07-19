const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

// EJS setup
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const home = require('./routes/index')
const auth = require('./routes/auth')

app.use('/', home)
app.use('/auth', auth)

const PORT = process.env.PORT || 3003

app.listen(PORT, console.log('Server started on port ${PORT}'));

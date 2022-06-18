const express = require('express')
const { Register, Login, GetUsers } = require('../controllers/users.js')

let router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/users', GetUsers)


module.exports = router
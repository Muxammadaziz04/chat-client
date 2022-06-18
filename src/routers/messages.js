const express = require('express')
const { PostMessage, GetMessages } = require('../controllers/message')


let router = express.Router()


router.post('/message', PostMessage)
router.get('/messages', GetMessages)


module.exports = router
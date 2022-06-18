const { InvalidRequestError } = require("../utils/errors")
const jwt = require('jsonwebtoken')


const secretKey = 'secret'


function checkToken(req, res, next){
    if(req.url == '/login' || req.url == '/register' || req.url == 'ava') next()

    try {
        let token = req.headers.token
        if(!token) throw new InvalidRequestError(400, 'token yoq')

        token = jwt.verify(token, secretKey)

        next()
    } catch (error) {
        next(new InvalidRequestError(403, error.message))
    }
}

module.exports = checkToken
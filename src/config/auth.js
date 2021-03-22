const jwt = require('jsonwebtoken')

const authSecret = process.env.authSecret

module.exports = (req, res, next) => {
    // CORS preflight request
    if(req.method === "OPTIONS") {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']

        if(!token) {
            res.status(403).send({ errors: ['No token provided.'] })
        }

        jwt.verify(token, authSecret, function(err, decoded) {
            if(err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token.']
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
}
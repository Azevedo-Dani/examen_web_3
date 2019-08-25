const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const user = req.user
    if (user) {
        res.json(req.user)
    } else {
        res.status(401).send('No user')
    }
})

module.exports = router
/*
 1° RETRIEVE JWT SECRET FROM CONFIG
 2° VERIFY VALUE OF HEADER X-AUTHENTIFIED
 3° IF VALUE IS TRUE, FETCH USER FROM DB AND PUT IT IN req.user
 4° CALL next() WHEN JOB IS DONE
*/
const clientDb = require('./db')

const authMiddleware = (req, res, next) => {
    const authentified = req.get('X-AUTHENTIFIED')
    const promise = new Promise( (resolve, reject) => {
        console.log(authentified == true)
        console.log(authentified === true)

        if (authentified && authentified !== "false") {
            clientDb.findOne('users', {}).then(result => {
                req.user = result
                resolve()
            })
        } 
        else {
            resolve()
        }
    })
    promise.then(() => {
        next()
    })
 }


module.exports = authMiddleware;
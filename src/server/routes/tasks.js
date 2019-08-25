const express = require('express')
const router = express.Router()
const clientDb = require('../modules/db')

// get all tasks
router.get('/', (req, res, next) => {
    clientDb.findAll('tasks', {}).then(tasks => {
        res.json(tasks)
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id 
    clientDb.findOne('tasks', {_id: new clientDb.ObjectID(id)}).then(task => {
        console.log(task)
        res.json(task)
    })
})

// add new task
router.post('/', (req,res,next) => {
    clientDb.insertOne('tasks', {content: req.body.content}).then(result => {
        res.status(200).send({message:'Task added'})
    })
})

router.post('/:id', (req,res,next) => {
    clientDb.updateOne('tasks', {_id: new clientDb.ObjectID(req.params.id)}, {content: req.body.content}).then(result => {
        res.status(200).send({message:'Task update'})
    })
})

// remove tast
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    clientDb.removeOne('tasks',{ _id: new clientDb.ObjectID(id)}).then(result => {
        res.status(200).send({message:'Task deleted'})
    })
})




module.exports = router
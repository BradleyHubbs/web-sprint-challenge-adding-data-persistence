const express = require('express')
const Task = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(resp => {
        res.status(200).json(resp)
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(next);
})

router.use((err, req, res, next) => { 
    res.status(500).json({
        customMessage: 'something went wrong inside the tasks router',
        message: err.message,
        stack:err.stack,
    })
})

module.exports = router

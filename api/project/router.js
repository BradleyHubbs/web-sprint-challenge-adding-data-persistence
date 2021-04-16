// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProjects()
    .then(resp => {
        res.status(200).json(resp)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(next);
})

router.use((err, req, res, next) => { 
    res.status(500).json({
        customMessage: 'something went wrong inside the projects router',
        message: err.message,
        stack:err.stack,
    })
})

module.exports = router
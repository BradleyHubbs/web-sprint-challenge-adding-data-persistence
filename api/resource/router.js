// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.getResources()
    .then(resp => {
        res.status(200).json(resp)
    })
    .catch(next)
})

router.use((err, req, res, next) => { 
    res.status(500).json({
        customMessage: 'something went wrong inside the resources router',
        message: err.message,
        stack:err.stack,
    })
})

module.exports = router
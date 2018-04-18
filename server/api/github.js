const router = require('express').Router()
const {GitHub} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  GitHub.create(req.body)
  .then(github => res.json(github))
  .catch(next)
})

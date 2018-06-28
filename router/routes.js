const express = require("express");
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res, next) => {
  res.send({ message: 'this is working, but under construction!' })
  .catch(next)
})

router.get('/pantry', (req, res, next) => {
  queries.readItem()
    .then(items => { res.json({ items }) })
    .catch(next);
})

router.get('/users', (req, res, next) => {
  queries.readUsers()
    .then(users => {
      res.json({
        users
      })
    })
    .catch(next);
})

router.post('/newuser', (req, res, next) => {
  queries.createUser(req.body)
    .then(user => res.status(201).json({ message: 'welcome' }))
    .catch(next);
})

module.exports = router
const express = require('express')
const getLeads = require('../controllers/getLeads')

const router = express.Router()

router.get('/', getLeads)

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router

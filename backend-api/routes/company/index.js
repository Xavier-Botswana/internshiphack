const bodyParser = require('body-parser')

const {
  addVacancy,
  getRequests,
  respondRequest,
} = require('../../controller/ctrlCompanies')

const express = require('express')
// const transfersRouter = require('./transfers')

const router = express.Router()

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

router.use(allowCrossDomain)
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res, next) => {
  res.json(data)
})

router.post('/add-vacancy', addVacancy)

router.get('/requests', getRequests)

router.put('/respond-to-request', respondRequest)

module.exports = router

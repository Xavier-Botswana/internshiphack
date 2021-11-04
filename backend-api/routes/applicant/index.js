const bodyParser = require('body-parser')

const {
  makeApplication,
  confirmDetails,
  getApplicationStatus,
  contract,
  acceptContract,
  declineContract,
  placements,
  acceptPlacement,
  declinePlacement,
  addRequest,
} = require('../../controller/ctrlApplications')

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

router.post('/application', makeApplication)

router.post('/confirm-details', confirmDetails)

router.get('/application-status', getApplicationStatus)

router.get('/contract', contract)

router.get('/placements', placements)

router.post('/request', addRequest)

router.put('/accept-contract/:contractId', acceptContract)

router.put('/decline-contract/:contractId', declineContract)

router.put('/accept-placement/:contractId', acceptPlacement)

router.put('/decline-placement/:contractId', declinePlacement)

module.exports = router

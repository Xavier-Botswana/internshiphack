const bodyParser = require('body-parser')

const {
  analytics,
  sendNotification,
  autoPlace,
} = require('../../controller/ctrlNotifications')

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

router.get('/analytics', analytics)

router.post('/send-notification', sendNotification)

router.post('/auto-place', autoPlace)

module.exports = router

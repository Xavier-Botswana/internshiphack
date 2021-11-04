const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const express = require('express')
const app = express()

const applicantRouter = require('./routes/applicant/')
const placementOfficerRouter = require('./routes/placement-officer/')
const companyRouter = require('./routes/company/')

let port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Testing API')
})

app.use('/applicant', applicantRouter)
app.use('/placement-officer', placementOfficerRouter)
app.use('/company', companyRouter)

app.listen(port, () => {
  console.log(`Application API is running on port: http://localhost:${port}`)
})

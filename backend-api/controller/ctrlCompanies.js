const data = require('../demoData/applicantDemo.json')

const addVacancy = async (req, res, next) => {
  try {
    response = 'Vacancy added and sent to ministry.'

    return res.status(200).json({ res: response })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const getRequests = async (req, res, next) => {
  try {
    let { idNum } = req.params
    return res.status(200).json({
      res: [
        {
          idNumber: 28398923,
          requestType: 'leave',
          description: '10 days',
        },
        {
          idNumber: 12839892,
          requestType: 'leave',
          description: '10 days',
        },
        {
          idNumber: 28398925,
          requestType: 'resign',
          description: 'new job found.',
        },
      ],
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const respondRequest = async (req, res, next) => {
  try {
    let { idNumber, phoneNumber, message } = req.params
    return res.status(200).json({
      res: 'Request status changed. Employee notified.',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  addVacancy,
  getRequests,
  respondRequest,
}

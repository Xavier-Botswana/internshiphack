const data = require('../demoData/applicantDemo.json')

const analytics = async (req, res, next) => {
  try {
    let num = Math.floor(Math.random() * 10) + 1

    response = {
      registeredUsers: 242000,
      tireloSechaba: 75000,
      nationalInternship: 85000,
      graduateVolunteers: 45000,
      placementTrend: {
        Jan: {
          BNSP: 400,
          NIP: 380,
          GVS: 230,
        },
        Feb: {
          BNSP: 450,
          NIP: 480,
          GVS: 490,
        },
        Mar: {
          BNSP: 300,
          NIP: 200,
          GVS: 250,
        },
      },
      applicantsByPortfolio: {
        engineering: 0.2,
        agriculture: 0.4,
        commerce: 0.3,
        agriculture: 0.1,
      },
    }

    return res.status(200).json({ data: response })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const autoPlace = async (req, res, next) => {
  try {
    let { idNum } = req.params
    return res.status(200).json({
      res: 'User has been auto placed with a company matching their profile.',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const sendNotification = async (req, res, next) => {
  try {
    let { idNumber, phoneNumber, message } = req.params
    return res.status(200).json({
      res: 'User notified of change in internship application status.',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  analytics,
  sendNotification,
  autoPlace,
}

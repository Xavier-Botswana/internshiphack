const data = require('../demoData/applicantDemo.json')

const makeApplication = async (req, res, next) => {
  try {
    const { idDocument, cV, internshipProgram } = req.body

    response = `We have extracted the following information from your documents - please confirm if they're correct;`

    return res.status(200).json({
      res: response,
      profile: data.profile,
      educationalInformation: data.educationalInformation,
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ res: error.message })
  }
}

const confirmDetails = async (req, res, next) => {
  try {
    const { action } = req.body
    console.log(action)
    let response = ''

    if (action === 'confirm') {
      response =
        'Thank you for your submission. Our team will review your application and update you via SMS.'
    } else {
      response =
        'Your documents had the following information missing - please answer the following questions to complete your application: What is your preferred location (preferably a place with your own accommodation)?'
    }

    return res.status(200).json({ res: response })
  } catch (error) {
    console.clear()
    return res.status(500).json(error.message)
  }
}

const getApplicationStatus = async (req, res, next) => {
  try {
    let num = Math.floor(Math.random() * 10) + 1

    if (num % 2 === 0) {
      response =
        'Your application is currently in its final evaluation stage. You will receive an SMS alert in two days showing your status as well as next steps.'
    } else {
      response =
        'Your application is currently in its final evaluation stage. You will receive an SMS alert in two days showing your status as well as next steps.'
    }

    return res.status(200).json({ res: response })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const contract = async (req, res, next) => {
  try {
    return res.status(200).json({
      res:
        'Congratulations your application has been accepted as you meet all the requirements for the National Internship program. Below is the contract between you and the ministry.',
      option:
        'Do you agree to the terms and conditions of the above agreement?',
      downloadLink:
        'https://firebasestorage.googleapis.com/v0/b/funolympic-fnqi.appspot.com/o/contract.jpg?alt=media&token=9eda4400-cf77-4970-989a-2ef1ddeedfa9',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const acceptContract = async (req, res, next) => {
  try {
    let { contractId } = req.params
    return res.status(200).json({
      res:
        'Thank you for accepting the agreement - you will now be considered for government internship programs.',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const declineContract = async (req, res, next) => {
  try {
    let { contractId } = req.params
    return res.status(200).json({
      res:
        'Your contract has been declined. Thank you for participating in the internship program.',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const placements = async (req, res, next) => {
  try {
    response =
      'There is a placement currently available at the Department Of Tertiary Education Funding (DTEF) Office in Gaborone - the position is in the communications department. Please note that you need to have your own accommodation in order to be eligible for this program. Would you like to accept this opportunity?.'

    return res.status(200).json({ res: response })
  } catch (error) {
    console.clear()
    return res.status(500).json(error.message)
  }
}

const acceptPlacement = async (req, res, next) => {
  try {
    let { contractId } = req.params
    return res.status(200).json({
      res:
        'Your details have been sent over to the Department Of Tertiary Education Funding (DTEF)  and your supervisor will be in contact with you.',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const declinePlacement = async (req, res, next) => {
  try {
    let { contractId } = req.params
    return res.status(200).json({
      res:
        'We will consider you for more opportunities in the future. Your name will be kept within the national queue.',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

const addRequest = async (req, res, next) => {
  try {
    let { idNumber, requestType, description } = req.params
    return res.status(200).json({
      res:
        'Your request has been sent to your department for consideration. Expect an SMS response detailing the outcome.',
    })
  } catch (error) {
    console.clear()
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
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
}

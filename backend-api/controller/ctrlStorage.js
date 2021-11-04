/**
 * FOR STORAGE
 */
const Busboy = require('busboy')
const path = require('path')
const { Storage } = require('@google-cloud/storage')
const API_LINK_BASE_URL = 'http://storage.googleapis.com'
const BUCKET_ID = 'tyreworld-files'
const storage = new Storage({
  keyFilename: path.join(__dirname, '../gc-key.json'),
  projectId: 'tyreworld-api',
})

const addFile = async (req, res, next) => {
  // File upload
  const bucket = storage.bucket(BUCKET_ID)

  const busboy = new Busboy({ headers: req.headers })
  const fields = {}
  const fileUrls = []
  let imageFileName

  busboy.on('field', (fieldname, val) => {
    //console.log(`Processed field ${fieldname}: ${val}.`)
    fields[fieldname] = val
  })

  busboy.on('file', (fieldname, uploadedFile, filename) => {
    //console.log(`Processed file ${filename}`)

    imageFileName = filename

    const gcsname = `${new Date().getTime()}-${filename}`
    fileUrls.push(`${API_LINK_BASE_URL}/${BUCKET_ID}/${gcsname}`)
    const gcsfile = bucket.file(gcsname)
    const writeStream = gcsfile.createWriteStream({
      resumable: false,
    })
    uploadedFile.pipe(writeStream)

    return new Promise((resolve, reject) => {
      uploadedFile.on('end', () => {
        writeStream.end()
      })
      writeStream.on('finish', () => {
        //console.log('file finished')
        return resolve()
      })
      writeStream.on('error', reject)
    })
      .then(() => {
        //console.log(gcsname)
        return gcsfile.makePublic()
      })
      .catch((e) => console.log(e))
  })

  busboy.on('finish', (err) => {
    if (err) {
      return res.status(500).json({ res: err.message })
    }

    let imageUrl = fileUrls[0]

    if (imageFileName === '') {
      imageUrl = ''
    }

    return res.status(200).json({
      imageUrl: imageUrl,
    })
  })

  busboy.end(req.rawBody)
}

const editFile = async (req, res, next) => {
  let id = req.params.id
  // File upload
  const bucket = storage.bucket(BUCKET_ID)

  const busboy = new Busboy({ headers: req.headers })
  const fields = {}
  const fileUrls = []
  let imageFileName

  busboy.on('field', (fieldname, val) => {
    //console.log(`Processed field ${fieldname}: ${val}.`)
    fields[fieldname] = val
  })

  busboy.on('file', (fieldname, uploadedFile, filename) => {
    //console.log(`Processed file ${filename}`)

    imageFileName = filename

    const gcsname = `${new Date().getTime()}-${filename}`
    fileUrls.push(`${API_LINK_BASE_URL}/${BUCKET_ID}/${gcsname}`)
    const gcsfile = bucket.file(gcsname)
    const writeStream = gcsfile.createWriteStream({
      resumable: false,
    })
    uploadedFile.pipe(writeStream)

    return new Promise((resolve, reject) => {
      uploadedFile.on('end', () => {
        writeStream.end()
      })
      writeStream.on('finish', () => {
        //console.log('file finished')
        return resolve()
      })
      writeStream.on('error', reject)
    })
      .then(() => {
        //console.log(gcsname)
        return gcsfile.makePublic()
      })
      .catch((e) => console.log(e))
  })

  busboy.on('finish', (err) => {
    if (err) {
      return res.status(500).json({ res: err.message })
    }

    let imageUrl = fileUrls[0]

    if (imageFileName === '') {
      imageUrl = ''
    }

    let query = collectionRef.doc(id)
    query
      .update({
        imageUrl: imageUrl,
      })
      .then(() => {
        return res.status(200).json({
          imageUrl: imageUrl,
        })
      })
      .catch((error) => {
        console.clear()
        return res.status(500).json(error.message)
      })
  })

  busboy.end(req.rawBody)
}

module.exports = {
  addFile,
  editFile,
}

const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')
const contactUsRequestDTO = require('../requests/contactUsRequestDTO')
const contactUsValidator = require('../validators/contactUsValidator')
const mailer = require('../domain/services/mail.service')

const contactUs = catchExceptions(async (req, res, next) => {
  const contactUsRequest = contactUsRequestDTO(req.body)

  contactUsValidator(contactUsRequest)

  const message = mailer.sendMail(contactUsRequest)

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `Email successfully sent.`,
      data: message,
      errors: null
    })
  )
})

module.exports = {
  contactUs
}

const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchException = require('../utils/catchExceptions')
const accountService = require('../domain/services/account.service')
const userService = require('../domain/services/user.service')

const getAccountById = catchException(async (req, res) => {
  const account = await accountService.getById(req.user._id)

  res.status(200).json(
    globalResponseDTO({
      message: `The current auth user's account settings.`,
      data: account
    })
  )
})

const updateAccountById = catchException(async (req, res) => {
  const account = await accountService.updateById(req.user._id, req.body)

  res.status(200).json(
    globalResponseDTO({
      message: `Updated the current auth user's account settings.`,
      data: account
    })
  )
})

const updateUserById = catchException(async (req, res, next) => {
  const user = await userService.updateById(req.user._id, req.body)

  res.status(200).json(
    globalResponseDTO({
      message: `Updated the current auth user's settings.`,
      data: user
    })
  )
})

module.exports = {
  getAccountById,
  updateAccountById,
  updateUserById
}

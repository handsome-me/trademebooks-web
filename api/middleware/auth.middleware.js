const globalResponseDTO = require('../dtos/responses/globalResponseDTO')

const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    res.status(401).json(
      globalResponseDTO({
        status: 'failed',
        code: 401,
        message:
          'Access denied: you must be logged in to access this API endpoint.',
        data: null,
        errors: ['You must be logged in.']
      })
    )
  } else {
    next()
  }
}

module.exports = isAuthenticated

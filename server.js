const server = require('./api')
const PORT = process.env.PORT || 5000

const db = require('./api/utils/db')

// Backend - Server
server.listen(PORT, async () => {
  await db() // start the database
  console.log(
    `Visit the API's health check page at: http://localhost:${PORT}/api/v1/utils/health`
  )
})

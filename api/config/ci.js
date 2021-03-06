module.exports = {
  baseUrl: 'https://wwww.trademebooks:',
  port: 80,
  apiPrefix: 'api',
  apiVersion: 'v1',
  mongoURI: process.env.MONGO_URI,
  sessionSecret: process.env.COOKIE_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  twilioKeys: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN
  },
  contactUsEmail: process.env.CONTACT_US_EMAIL,
  GOOGLE: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  FACEBOOK: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  },
  TWITTER: {
    clientID: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET
  },
  GITHUB: {
    clientID: 'x',
    clientSecret: 'x'
  },
  LINKEDIN: {
    clientID: 'x',
    clientSecret: 'x'
  }
}

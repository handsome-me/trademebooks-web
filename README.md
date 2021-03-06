# trademebooks.com (TMB) ![logo](https://github.com/yichenzhu1337/trademebooks-web/blob/master/client/public/favicon.png)

[![CircleCI](https://circleci.com/gh/yichenzhu1337/trademebooks-web.svg?style=shield)](https://circleci.com/gh/yichenzhu1337/trademebooks-web)
[![codecov](https://codecov.io/gh/yichenzhu1337/trademebooks-web/branch/master/graph/badge.svg?token=QLV1VDOBYU)](https://codecov.io/gh/yichenzhu1337/trademebooks-web)
![David](https://img.shields.io/david/yichenzhu1337/trademebooks-web?color=00cf33&style=flat-square)
![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m782940751-02c03d7c51d8c9788fdeb1a3?style=flat-square)
![Heroku](http://heroku-badge.herokuapp.com/?app=trademebooks&style=flat&svg=1&root=notfound.html)

## 📌 Public Project!

This is a public open source project!

:construction_worker: Check out our progress! https://trello.com/b/neeVBQO7/trademebooks-web

:art: Check out our wireframing process! https://figma.fun/CfpxqL

## About

trademebooks.com (TMB) is a platform for university students to buy, sell, and exchange textbooks.

The key features:

- [x] Simple single sign on with platforms such as FaceBook, Google, Linkedin, Twitter, and many more.
- [x] Users have their own profile (bookstore) which allow them to advertise and sell their textbooks.
- [x] Adding/Updating Books: Having the auto-complete feature when adding/updating a new or existing book.
- [x] <strike>Adding/Updating Books: A mobile image recognition (OCR - Optical character recognition) feature that can add/update books with the snap of a photo.</strike>
- [x] Have a good chat/messaging system in place in order to facilitate communication between buyers and sellers.
- [x] <strike>A middle man payment system;  
       Suppose person A wants to buy from person B a pdf file, person A and person B both pay trademebooks.com and/or upload the file, then TMB pays and reveals the uploaded files if only both of the two parties have successfully submitted what they wanted from each other. That way, trademebooks.com acts as a trusted middle man.</strike>

## Tech Stack

- Frontend: JavaScript and ReactJS
- Backend: Node.js, Express, and MongoDB
- Server (DevOps): Heroku
- Tools: Visual Studio Code (with plugins: Prettier, ESlint, Husky), and MongoDB Atlas

## Required Software

1. Install NodeJS - https://nodejs.org/en/
2. Install MongoDB Compass (The GUI for MongoDB) - https://www.mongodb.com/products/compass

## Frontend Setup

```bash
cd client
npm install
```

### Frontend Setup - Run the tests

```bash
cd client
npm run test
```

## Backend Setup

Make sure to be in the root directory, then:

```bash
npm install
```

### Backend Setup - Add the local config file

Create a file called _dev.js_ under the config directory.

```
module.exports = {
    baseUrl: 'http://localhost:',
    port: 5000,
    apiPrefix: 'api',
    apiVersion: 'v1',
    baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
    mongoURI: 'mongodb://localhost:27017/trademebooks_dev_db',
    sessionSecret: 'my-secret-session-dev',
    sendGridKey: 'my-sendgrid-key',
    twilioKeys: {
        accountSid: 'my-twilio-account-sid',
        authToken: 'my-twili-auth-token'
    }
};
```

Use this file: https://drive.google.com/file/d/1o8WwjnuLpu13pKYMjJ8x2gTKKWUPr0V8/view?usp=sharing

### Backend Setup - Seeding the databse with data

```bash
cd api/seeds
node <seed_file>.js
```

or

```bash
npm run db:seed
```

### Backend Setup - Running the tests

Go to the root directory of the project and run the following command to see if all tests pass.

```bash
npm run test
```

## Work Flow on Local Machine

Start the server locally on localhost:3000 with the following command in the root directory:

```bash
npm run dev
```

## Deploy to Production

- production link: https://www.trademebooks.com/
- heroku link: https://trademebooks.herokuapp.com/

\*The application will automatically be deployed to production whenever a push is invoked on the master branch.


var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://localhost/mean-dev',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Dodedodo - A Distributed Market Place'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    sense: {
      clientID: process.env.SENSE_CONSUMER_KEY,
      clientSecret: process.env.SENSE_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/auth/sense/callback"
    },
  },
  test: {
    db: 'mongodb://localhost/mean-test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Dodedodo - A Distributed Market Place'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    sense: {
      clientID: process.env.SENSE_CONSUMER_KEY,
      clientSecret: process.env.SENSE_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/auth/sense/callback"
    },
  },
  production: {
    db: 'mongodb://localhost/mean',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Dodedodo - A Distributed Market Place'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    sense: {
      clientID: process.env.SENSE_CONSUMER_KEY,
      clientSecret: process.env.SENSE_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/auth/sense/callback"
    },
  }
}

const Sequelize = require('sequelize')
const db = require('../db')

const GitHub = db.define('github', {
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  bio: {
    type: Sequelize.STRING
  },
  avatar: {
    type: Sequelize.STRING
  }
})

module.exports = GitHub

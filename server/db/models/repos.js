const Sequelize = require('sequelize')
const db = require('../db')

const Repos = db.define('repos', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = Repos

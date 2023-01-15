const Sequelize = require('sequelize');
const blogModel = require('../models/blog');
const categoryModel = require('../models/category');
const contactModel = require('../models/contact');
const dbConfig = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "anwesha12345",
    DB: "website",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  blogModel(sequelize, Sequelize)
  categoryModel(sequelize, Sequelize)
  contactModel(sequelize, Sequelize)
  module.exports = sequelize

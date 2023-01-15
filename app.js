const express = require('express');
const app = express();
const sequelize = require('./config/sequelize')
const bodyParser = require('body-parser')
async function runDatabase(){
    //await sequelize.sync()
    console.log('database connected succesfully!!!')
}
runDatabase()
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/uploads'));

app.listen(1000, function () {
    console.log("Server is running on port 1000 ");
  });
const blogRoutes = require('./routes/blog')

app.use(blogRoutes)


module.exports = app

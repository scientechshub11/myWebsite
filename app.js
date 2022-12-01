const express = require('express');
const app = express();
const sequelize = require('./config/sequelize')
const bodyParser = require('body-parser')
async function runDatabase(){
    //await sequelize.sync()
    console.log('database connected succesfully!!!')
}
runDatabase()
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.listen(8080, function () {
    console.log("Server is running on port 8080 ");
  });
const blogRoutes = require('./routes/blog')

app.use(blogRoutes)


module.exports = app

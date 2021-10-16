const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
// const bodyParser = require('body-parser')

const url = "mongodb+srv://milkDelivery:zokros-7kyxdi-kuxWod@milkproject.dl6lq.mongodb.net/MILK"


//Connect to the db
mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
const db = mongoose.connection


db.on('error', (err) => {
  console.log(err);
})

db.once('open', () => {
  console.log("Db connected......");
})

var port = 3000;
var host = '0.0.0.0' //must be string

//Import Routes
const user = require('./routes/userRoutes')
const driver = require('./routes/productRoutes')

//MiddleWare
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//ROUTES
app.use('/user', user)
app.use('/driver', product)


//Listening to the server
app.listen(port, host, function() {
    console.log(`Server is running on Host: ${host}:${port}`);
  });
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
// const bodyParser = require('body-parser')

const url = "mongodb+srv://vijayvijay1997:sunder.vj@cluster0.s3gkt.mongodb.net/bustracker?authSource=admin&replicaSet=atlas-78d6x4-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"


//Connect to the db
mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
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
const user = require('./routes/user_routes')
const bus = require('./routes/bus_routes')
// const driver = require('./routes/productRoutes')

//MiddleWare
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//ROUTES
app.use('/user', user)
app.use('/driver', bus)


//Listening to the server
app.listen(port, host, function() {
    console.log(`Server is running on Host: ${host}:${port}`);
  });
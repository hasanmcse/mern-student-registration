const express = require('express');
const app = new express();
const router = require("./src/Routes/api")
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors')
const hpp = require('hpp')
const cookieParser = require('cookie-parser')
const mongo = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');





//Security

app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(mongoSanitize())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb'}))


app.use(express.json());
app.use(bodyParser.json());


//Rate limit

const limiter = rateLimit({windowMs:15*60*1000, max:300});
 app.use(limiter)




// Mongo DB Database Connection
//let URI="mongodb://CRUD4";
//let OPTION={user:'testuser7777',pass:'testuser7777',autoIndex:true}








// Application routes
app.use("/api/v1", router);


//undefined route

app.use('*',(req, res) =>{
    res.status(404).json({status:"fail", data:" Data not found"})
})




module.exports = app;
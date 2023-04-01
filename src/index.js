const express = require('express')
const app = express()
const cors = require('cors')

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}

app.use(allowCrossDomain);
app.use(cors())
app.use(express.json())
app.use(require('./modules'))

app.listen( process.env.PORT || 9000, console.log(9000))
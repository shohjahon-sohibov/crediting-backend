const express = require('express')
const app = express()
// const cors = require('cors')
// const { allowCrossDomain } = require('./lib/middleWares')

// app.use(allowCrossDomain);
app.use(cors())
app.use(express.json())
app.use(require('./modules'))

app.listen( process.env.PORT || 9000, console.log(9000))
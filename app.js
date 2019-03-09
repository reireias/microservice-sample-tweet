const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('short'))

// server
app.use(require('./controllers'))

app.listen(process.env.PORT || 3000, () => {})

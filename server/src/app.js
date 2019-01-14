const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send({
        message: 'okey brow'
    })
})

app.post('/register', (req,res) => {
    res.send({
        message: `complate registration for email : ${req.body.email} with password: ${req.body.password}`
    })
})



app.listen(process.env.PORT || 8081)
console.log('listent to port === '); 
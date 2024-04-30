const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')


app.use(bodyParser.json())

// ROUTE PATH START
app.get('/', (req, res) => {
  response(200, "ini data", "ini message", res)
})

app.get('/mahasiswa', (req, res) => {
  response(200, "ini data", "mahasiswa get list", res)
})

app.get('/mahasiswa/:nim', (req, res) => {
  const nim = req.params.nim
  response(200, "ini data", `list mahasiswa by id : ${nim}`, res)
})

app.post('/mahasiswa', (req, res) => {
  response(200, "ini data", "POST", res)
})

app.put('/mahasiswa', (req, res) => {
  response(200, "ini data", "PUT / UPDATE DATA", res)
})

app.delete('/mahasiswa', (req, res) => {
  response(200, "ini data", "DELETE", res)
})
// ROUTE PATH END

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})

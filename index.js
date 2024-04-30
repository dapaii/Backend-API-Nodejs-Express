const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
// untuk connection ke->db 
const db = require('./connection')

const response = require('./response')

app.use(bodyParser.json())

// Routes / URL / endpoint utama method GET
app.get('/', (req, res) => {

  const sql = "SELECT * FROM mahasiswa"

  db.query(sql, (error, result) =>{
    response(200, result, "get all data from mahasiswa", res)
  })
})

// Routes / URL / endpoint admin method GET
app.get('/find', (req, res) => {
   
  const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim}`

  db.query(sql, (error, result) =>{
    response(200,  result, "find mahasiswa name", res)
  })
})

app.post('/login', (req, res) => {
  console.log({ requestFromOutside : req.body})
  res.send('login succes')
})

app.put('/LupaPassword', (req, res)=>{
  console.log({ updateData: req.body})
  res.send("update Berhasil")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
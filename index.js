const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')


app.use(bodyParser.json())

// ROUTE PATH START
app.get('/', (req, res) => {
  response(200, "API READY", "Succes", res)
})

app.get('/mahasiswa', (req, res) => {

  const sql = "SELECT * FROM mahasiswa"

  db.query(sql, (err, fields)=>{
    if(err) throw err
    response(200, fields, "mahasiswa get list", res)
  })

})

app.get('/mahasiswa/:nim', (req, res) => {

  const nim = req.params.nim
  const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`

 db.query(sql, (err, fields)=>{
  if(err) throw err
   response(200, fields, `list mahasiswa by id : ${nim}`, res)
 })

})

app.post('/mahasiswa', (req, res) => {

  const { nim, nama_lengkap, kelas, alamat } = req.body
  const sql = `INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (${nim}, '${nama_lengkap}', '${kelas}', '${alamat}')`

  db.query(sql, (err, fields)=>{
    if(err) response(500, "invalid", "error", res)
    if(fields?.affectedRows){
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId
      }
      response(200, data, "Add Data Successfuly", res)
    }else{
      response(404, "Invalid Add Data", "error", res)
    }
  })

})

app.put('/mahasiswa', (req, res) => {

  const {nim, nama_lengkap, kelas, alamat} = req.body
  const sql = `UPDATE mahasiswa SET nama_lengkap = '${nama_lengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = '${nim}'`

  db.query(sql, (err, fields)=>{
    if(err) response(500, "invalid", "error", res)
    if(fields?.affectedRows){
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message
      }
      response(200, data, "Updated Data Successfuly", res)
    }else{
      response(404, "user not found ", "error", res)
    }
  })

})

app.delete('/mahasiswa', (req, res) => {
  
  const {nim} = req.body
  const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`

  db.query(sql, (err, fields)=>{
    if(err)response(200, "invalid", "error", res)
    if(fields?.affectedRows){
      const data = {
        isSuccess : fields.affectedRows
      }
      response(200, data, "Deleted Data Successfuly ", res)
    }else{
      response(404, "user not found", "error", res)
    }
  })
})
// ROUTE PATH END

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})

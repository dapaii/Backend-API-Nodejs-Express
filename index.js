const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// Routes / URL / endpoint utama method GET
app.get('/', (req, res) => {
  res.send('Home')
})

// Routes / URL / endpoint admin method GET
app.get('/admin', (req, res) => {
  console.log({ urlParams: req.query})
  res.send("admin")
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
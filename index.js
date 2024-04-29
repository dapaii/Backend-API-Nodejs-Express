const express = require('express')
const app = express()
const port = 3000

// Routes / URL / endpoint utama method GET
app.get('/', (req, res) => {
  res.send('Hello')
})

// Routes / URL / endpoint admin method GET
app.get('/admin', (req, res)=>{
    res.send("admin")
})

app.post('/login', (req, res)=>{
    if(req.name === "admin"){
        res.send('login succes')
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
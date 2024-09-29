const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>My name is sohail dad</h1>')
})

app.get('/about',(req,res) => {
    res.send("<h1>This is About Page</h1>")
})

app.get('/contact',(req,res) => {
    res.send("<h1>This is Contact Page</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

// de che sa user ta khai no agha pa public folder ki che km v agha ba wrta show she.
// app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('<h1>My name is sohail dad</h1>')
})

// :slug (Monga da keyword da slash na bad che sa razi no da monga aghi da para used kao baki da code run ka aw check it .)
app.get('/contact/:slug',(req,res) => {
    res.send(`<h1>This is Contact Page in ${req.params.slug}</h1>`)
})

// da hm de bal pa shan de kho de ki deer parameter pass kawaly she.
app.get('/about/:slug/:second',(req,res) => {
    res.send(`<h1>This is About Page and slug ( ${req.params.slug} ) and second params (${req.params.second} ) </h1>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


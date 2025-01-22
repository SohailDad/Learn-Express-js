const express = require('express');
const routes = express.Router({ mergeParams: true });




routes.get('/', (req, res) => {
      res.send('<h1>My name is sohail dad</h1>')
    })

// :slug (Monga da keyword da slash na bad che sa razi no da monga aghi da para used kao baki da code run ka aw check it .)
routes.get('/contact/:slug',(req,res) => {
    res.send(`<h1>This is Contact Page in ${req.params.slug}</h1>`)
})


// da hm de bal pa shan de kho de ki deer parameter pass kawaly she.
routes.get('/about/:slug/:second',(req,res) => {
    res.send(`<h1>This is About Page and slug ( ${req.params.slug} ) and second params (${req.params.second} ) </h1>`)
})
    

module.exports = routes;
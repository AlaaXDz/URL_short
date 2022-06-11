const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    res.render('index')
})

app.post('shortUrl', (req,res)=>{

})

app.listen(process.env.PORT || 5000);
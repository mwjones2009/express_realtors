const express = require('express')
//const path = require('path')
const PORT = 5001
//const button = document.querySelector('#searchBtn')
const cors = require('cors')
const apartments = require('./apartments.js')
const houses = require('./houses.js')



const app = express()
app.use(express.static('public'));
app.use(cors())


app.listen(PORT, () => {console.log('Welcome to Jones Realty')})

app.get('/', (req, res) =>{
  res.send({
    msg: 'server running' })})

app.get('/apartments', apartments.getApartments)
app.get('/apartments/:id', apartments.getApartment)

    app.get('/houses', houses.getHouses)
    app.get('/houses/:id', houses.getHouse) 
    app.get('/search',houses.searchHouses)

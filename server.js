const express = require('express')
const PORT = 3001
const cors = require('cors')
const catController = require('./controllers/catController.js')
const dogController = require('./controllers/dogController.js')
const apartments = require('./apartments.js')



const app = express()
app.use(cors())
app.use(express.json())


app.listen(PORT, () => {console.log('working')})

app.get('/', (req, res) =>{
  res.send({
    msg: 'server running' })})

    app.get('/cats', catController.getCats)
    app.get('/cats/:id', catController.getCat)

    app.get('/dogs', dogController.getDogs)
    app.get('dogs/:id', dogController.getDog)

    app.get('/apartments', apartments.getApartments)
    app.get('/apartments/:id', apartments.getApartment)
const apartments = [
  { address: ' 234 South Jefferson street APT 43B',
  sqFt:2500,
  price:'$2400 a month',
  waterfrontView: false},

  { address: '1324 Balboa loop APT 1',
  sqFt: 3975,
  price: '$4075 a month',
  waterfrontView: true},
  { address: '7117 pennsylvania ave NW',
  sqFt:2975,
  price:'$3385.89 a month',
  waterfrontView: false},

  { address: ' 245 South Jefferson street APT 4A',
  sqFt:2500,
  price:'$2470 a month',
  waterfrontView: false},

]



const getApartments = (req, res) => {
  res.send(apartments)
}

const getApartment = (req, res) => {
  res.send(apartments[req.params.id])
}

module.exports ={
  getApartments,
  getApartment
}



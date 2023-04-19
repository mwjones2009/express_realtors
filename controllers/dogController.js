const dogs = [
  { name: 'bentley',
  breed:'German shepherd',
  goodBoy: true },
  {name:'sammie',
breed:'poodle',
goodBoy: false},
{name: 'Thelma',
breed:'American Bulldog',
goodBoy:true},
{name:'banks',
breed: ' yorkshire Terrier',
goodBoy: true}
];



const getDogs =(req, res) => {
  res.send(dogs)
}


const getDog = (req, res) => {
  res.send(dogs[req.params.id])
}

module.exports = {
  getDogs,
  getDog
}
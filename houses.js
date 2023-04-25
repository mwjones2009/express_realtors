const houses = [
{ 
  address:{
    streetNum:4355,
    streetName:'Governors manor Ln',
    city:"Davidsonville",
    state:'MD',
    zipCode:21035
  },
   
  sqFt:5087,
  bedRooms:6,
  bathRoom:7.5,
  price:15652482518,
  image : 'house1.jpeg'
},

{address:'12627 Hilltop rd Lusby MD',
sqFt:1108,
bedRooms:3,
bathRoom:2,
price:294900,
image: 'house2.jpeg'
},

{address:'973 Silverton Ct Lubsy, MD',
sqFt:1624,
bedRooms:3,
bathRoom:2,
price:5000,

}










]

// const getHouses = (req, res) => {
//   res.send(houses)
// }
const getHouses = (req, res) => {
  res.status(200).json(houses)
}
const getHouse = (req, res) => {
  res.send(houses[req.params.id])
}
const searchHouses = (req, res) => {
  const query = req.query.query
  const reg = new RegExp(query);
  const results = houses.filter((house) => {
    //return reg.test(house.address)
    return house.address.city === query
  })
  res.status(200).json(results)
}
module.exports = {
  getHouses,
  getHouse,
  searchHouses
}
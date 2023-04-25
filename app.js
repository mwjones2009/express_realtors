console.log('this is working');

const resultContainer = document.getElementById('results')
const searchBtn = document.getElementById('searchBtn')

const imageFolderRoot = 'http://localhost:5001/'

searchBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log('button clicked');

  const query = document.getElementById('searchQuery').value;

  const url = query ? `http://localhost:5001/search?query=${query}` : 'http://localhost:5001/houses'
  
  fetchData(url);
})

const fetchData = async (urlEndpoint) => {

  const response = await fetch(urlEndpoint, {
    method : "GET"
  })
  const resData = await response.json()
  console.log(resData)

  resData.forEach((house) =>{
    createResultContainer(house);
  })
}

const createResultContainer = (house) => {
  const list = '<li>' + '<img src="' + imageFolderRoot + house.image + '"/>' + '<h3>'+house.address.city +'</h3>' +'<p>This house has '+house.bedRooms+' bedrooms.</p>'+'</li>'
  resultContainer.innerHTML += list
}
 
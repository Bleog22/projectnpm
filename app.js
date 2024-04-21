let url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.2090&lon=-93.2923&appid=a813b66b087a6d6047607cc1081d3024'

axios.get(url)
.then(respone =>{
console.log(respone)
}).catch(err =>{
console.log(err)
})
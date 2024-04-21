//Setting api url to a variable
let url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.2090&lon=-93.2923&units=imperial&appid=a813b66b087a6d6047607cc1081d3024'


//Using axios to get make a api call that uses a promise to return a respone or error
axios.get('https://api.openweathermap.org/data/2.5/weather?lat=37.2090&lon=-93.2923&units=imperial&appid=a813b66b087a6d6047607cc1081d3024')
.then(respone =>{
    //console logging returned data in jason format
console.log(respone.data);
//Setting object returned into a variable for readability
let myWeatherObj = respone.data;

//Getting ahold of dom objects 
let location = document.getElementById('location');
//Setting the location
location.textContent += `${myWeatherObj.name}`

let feelsLike = document.getElementById('feelsLike');

feelsLike.textContent += `${myWeatherObj.main.feels_like}°F`






}).catch(err =>{
console.log(err)
})
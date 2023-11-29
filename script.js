const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'efc017cd4dmshdd262ce56236c90p16666djsnc4d09f565b55',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const cityNameElement = document.getElementById("cityName");
// const temp2 = document.getElementById("temp2");
// const humidity2 = document.getElementById("humidity2");
// const wind_speed2 = document.getElementById("wind_speed2");
const submit = document.getElementById("submit");


const getWeather = (city) => {
    cityName.innerHTML = city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json()) 
    .then((response) => {

        console.log(response)
        
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    const newCity = cityNameElement.value; // Get the new city name from the input field
    getWeather(newCity);
    //getWeather(cityName.value)
});

getWeather("Delhi");

    function formatDate(timestamp) {
        let date = new Date(timestamp);
        let hours = date.getHours();
        if (hours < 10) {
          hours = `0${hours}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
      
        let dayIndex = date.getDay();
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];
        let day = days[dayIndex];
      
        return `${day} ${hours}:${minutes}`;
      }
      
   
  

function displayTemperature (response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector ("#city");
let descriptionElement = document.querySelector ("#description");
let humidityElement = document.querySelector ("#humidity");
let windElement = document.querySelector ("#wind");
let todayElement = document.querySelector ("#today");
temperatureElement.innerHTML = Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
todayElement.innerHTML = formatDate (response.data.dt * 1000);
console.log (response.data)
}

let apiKey = "d5cc6a4c9a606dc61bc511b225dae4e0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;



axios.get(apiUrl).then(displayTemperature);

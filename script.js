const images = document.querySelector(".iconImages");
const temperature = document.querySelector(".temperature");
const cityName = document.querySelector(".city");
const windSpeed = document.querySelector(".speed");
const percent = document.querySelector(".percent");
const descriptionWeather = document.querySelector(".weather-descrip");
const typeSpace = document.querySelector(".searchSpace");
const searchBtn = document.querySelector(".searchBtn");
const submitForm = document.querySelector(".submit-form");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = typeSpace.value;

  getWeather(city);
});

async function getWeather(city) {
  if (city.trim() === "") {
    console.log("Please enter a city name.");
    return;
  }

  const response = await fetch(
    `/api/weather?city=${encodeURIComponent(city)}`
  );

  const data = await response.json();

  cityName.textContent = data.name;

  temperature.textContent = Math.round(data.main.temp) + "℃";

  descriptionWeather.textContent = data.weather[0].main;

  windSpeed.textContent = Math.round(data.wind.speed * 3.6) + " km/h";
}
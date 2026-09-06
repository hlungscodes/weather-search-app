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

  console.log(city);
}
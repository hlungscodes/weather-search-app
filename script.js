const images = document.querySelector(".iconImages");
const temperature = document.querySelector(".temperature");
const cityName = document.querySelector(".city");
const windSpeed = document.querySelector(".speed");
const percent = document.querySelector(".percent");
const descriptionWeather = document.querySelector(".weather-descrip");
const popUpText = document.querySelector(".pop-up");
const weatherContainer = document.querySelector(".weather-container");
const warningImg = document.querySelector(".warning-image");
const loadingAlert = document.querySelector(".loader");
const searchHide = document.querySelector(".search");
const submitForm = document.querySelector(".submit-form");
const card = document.querySelector(".card");

const typeSpace = document.querySelector(".searchSpace");
const searchBtn = document.querySelector(".searchBtn");

async function getWeather(city) {
  if (city.trim() === "") {
    shake("Search box empty. Please enter city name and try again.");
    return;
  }

  loadingActive();

  try {
    const response = await fetch(
      `/api/weather?city=${encodeURIComponent(city)}`,
    );

    const data = await response.json();

    if (!response.ok) {
      loadingAlert.style.display = "none";
      searchHide.style.display = "flex";

      shake(data.error || "Unable to get weather information.");
      return;
    }

    card.style.display = "block";
    searchHide.style.display = "flex";
    loadingAlert.style.display = "none";
    warningImg.style.display = "none";
    popUpText.style.display = "none";
    weatherContainer.style.display = "block";

    temperature.textContent = Math.round(data.main.temp) + "℃";
    cityName.textContent = data.name + " | " + data.sys.country;
    descriptionWeather.textContent = data.weather[0].main;
    windSpeed.textContent = Math.round(data.wind.speed * 3.6) + " km/h";
    percent.textContent = data.main.humidity + "%";

    if (data.weather[0].main === "Drizzle") {
      images.src = "icon/drizzle.png";
    } else if (data.weather[0].main === "Clouds") {
      images.src = "icon/clouds.png";
    } else if (data.weather[0].main === "Rain") {
      images.src = "icon/rain.png";
    } else if (data.weather[0].main === "Clear") {
      images.src = "icon/clear.png";
    } else if (data.weather[0].main === "Snow") {
      images.src = "icon/snow.png";
    } else if (data.weather[0].main === "Mist") {
      images.src = "icon/mist.png";
    } else {
      images.src = "icon/confused.png";
    }
  } catch (error) {
    loadingAlert.style.display = "none";
    searchHide.style.display = "flex";

    shake("Unable to connect. Please check your internet connection.");

    console.error(error);
  }
}

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = typeSpace.value;

  getWeather(city);

  typeSpace.value = "";
});

function shake(massege) {
  [popUpText, warningImg].forEach((element) => {
    element.classList.remove("shake");

    void element.offsetWidth;

    element.classList.add("shake");
  });

  weatherContainer.style.display = "none";

  document.querySelector(".card").style.paddingBottom = "40px";

  popUpText.style.display = "block";
  warningImg.style.display = "block";

  popUpText.textContent = massege;

  warningImg.src = "icon/warning.png";

  card.style.display = "block";
}

function loadingActive() {
  loadingAlert.style.display = "block";
  searchHide.style.display = "none";
  weatherContainer.style.display = "none";
  popUpText.style.display = "none";
  warningImg.style.display = "none";
  card.style.display = "none";
}

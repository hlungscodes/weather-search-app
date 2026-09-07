const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, ".")));

app.get("/api/weather", (req, res) => {
  const city = req.query.city;

  if (!city || city.trim() === "") {
    return res.status(400).json({
      error: "City name is required."
    });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "OpenWeather API key is missing."
    });
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather` +
    `?q=${encodeURIComponent(city)}` +
    `&appid=${apiKey}` +
    `&units=metric`;

  console.log("Weather URL created.");

  res.json({
    message: "Weather route is working.",
    city: city
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, ".")));

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;

  if (!city || city.trim() === "") {
    return res.status(400).json({
      error: "City name is required."
    });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    console.error("OpenWeather API key is missing.");
    
    return res.status(500).json({
      error: "Weather service is not configured."
    });
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather` +
    `?q=${encodeURIComponent(city)}` +
    `&appid=${apiKey}` +
    `&units=metric`;

  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message || "Unable to get weather data."
      });
    }

    res.json(data);

  } catch (error) {
    console.error("Weather request failed:", error);

    res.status(500).json({
      error: "Unable to connect to the weather service."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
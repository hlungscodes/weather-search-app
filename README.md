# Live Website Link

You can click here to open and play with the app instantly in your browser:  https://weather-search-app-p5hm.onrender.com/

# Weather Search App

A weather search web application that allows users to search for a city and view its current weather information.

The project was built using HTML, CSS, JavaScript, Node.js, and Express. The application communicates with the OpenWeather API through a backend server so that the API key is not exposed in the frontend code.

## Features

- Search for weather by city name
- Display the current temperature
- Display the weather condition
- Display the city name and country code
- Display wind speed
- Display humidity
- Display weather icons based on the current weather condition
- Loading state while weather data is being retrieved
- Error messages for invalid searches
- Error handling for weather API problems
- Internet connection error handling
- Responsive layout for different screen sizes
- Remember the last successfully searched city using browser Local Storage

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### API

- OpenWeather API

### Other Tools

- Git
- GitHub
- npm
- dotenv

## How the Application Works

The application uses a frontend and backend structure.

When a user searches for a city, the JavaScript frontend sends a request to the Express server:

```text
Browser
   ↓
JavaScript fetch()
   ↓
Express server
   ↓
OpenWeather API
   ↓
Express server
   ↓
Browser
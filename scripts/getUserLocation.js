import { getWeatherInfo } from "../data/weatherInfo";

const searchInput = document.getElementById("search");

export function getUserLocation(url, apiKey, unit) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => showPosition(position, url, apiKey, unit, searchInput),
      (error) => showError(error, url, apiKey, unit, searchInput)
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

async function showPosition(position, url, apiKey, unit, searchInput) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const location = `${lat},${lon}`;

  await getWeatherInfo(url, apiKey, location, unit.value);
  searchInput.value = document.querySelector(
    ".current-weather-data__city"
  ).innerText;
}

function showError(error, url, apiKey, unit, searchInput) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.warn("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
      break;
  }

  // Get the last searched city from local storage
  const savedCity = localStorage.getItem("lastCity");
  if (savedCity) {
    searchInput.value = savedCity;
    getWeatherInfo(url, apiKey, savedCity, unit.value);
  }
}

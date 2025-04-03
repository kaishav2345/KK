const apiKey = "79713be06cc256ab2e403fc0efa8b494"; // Replace with your OpenWeather API key

document.addEventListener("DOMContentLoaded", () => {
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const languageSelector = document.getElementById("language-selector");

    if (getWeatherBtn) {
        getWeatherBtn.addEventListener("click", getWeather);
    }

    if (languageSelector) {
        languageSelector.addEventListener("change", changeLanguage);
    }
});

function getWeather() {
    const city = document.getElementById("city").value.trim();
    const weatherInfo = document.getElementById("weather-info");

    if (!city) {
        alert("Please enter a city!");
        return;
    }

    weatherInfo.innerHTML = "<p>Loading...</p>"; // Show loading message

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                weatherInfo.innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
                `;
            } else {
                weatherInfo.innerHTML = "<p>City not found. Please try again.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            weatherInfo.innerHTML = "<p>Failed to fetch weather data. Try again later.</p>";
        });
}


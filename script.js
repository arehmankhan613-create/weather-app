const apiKey = "3d12bfd7c67376c39b298450c321d916";

const cityInput = document.getElementById("city");
const result = document.getElementById("result");
const forecast = document.getElementById("forecast");
const loading = document.getElementById("loading");

async function getWeather(        // 5-Day Forecast
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );

        const forecastData = await forecastResponse.json();

        let forecastHTML = "<h2>📅 5-Day Forecast</h2>";

        for (let i = 0; i < forecastData.list.length; i += 8) {

            const day = forecastData.list[i];

            forecastHTML += `
                <div class="forecast-card">

                    <h3>${new Date(day.dt * 1000).toLocaleDateString()}</h3>

                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

                    <h4>${Math.round(day.main.temp)}°C</h4>

                    <p>${day.weather[0].main}</p>

                </div>
            `;
        }

        forecast.innerHTML = forecastHTML;

        loading.innerHTML = "";

    } catch (error) {

        loading.innerHTML = "";
        result.innerHTML = "<h2>❌ Network Error</h2>";
        forecast.innerHTML = "";

        console.error(error);

    }

}) {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    loading.innerHTML = "⏳ Loading...";

    try {

        // Current Weather
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const weatherData = await weatherResponse.json();

        if (!weatherResponse.ok) {
            loading.innerHTML = "";
            result.innerHTML = `<h2>❌ ${weatherData.message}</h2>`;
            forecast.innerHTML = "";
            return;
        }

        result.innerHTML = `
            <h2>${weatherData.name}, ${weatherData.sys.country}</h2>

            <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">

            <h1>${Math.round(weatherData.main.temp)}°C</h1>

            <h3>${weatherData.weather[0].description}</h3>

            <p>🤗 Feels Like : ${Math.round(weatherData.main.feels_like)}°C</p>

            <p>💧 Humidity : ${weatherData.main.humidity}%</p>

            <p>💨 Wind : ${weatherData.wind.speed} m/s</p>

            <p>🌍 Pressure : ${weatherData.main.pressure} hPa</p>

            <p>👁 Visibility : ${(weatherData.visibility / 1000).toFixed(1)} km</p>

            <p>🌅 Sunrise : ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>

            <p>🌇 Sunset : ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
        `;
function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(async function(position) {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );

            const data = await response.json();

            document.getElementById("city").value = data.name;

            getWeather();

        }, function() {

            alert("Location permission denied.");

        });

    } else {

        alert("Geolocation is not supported.");

    }

}
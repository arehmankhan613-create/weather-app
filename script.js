const apiKey = "3d12bfd7c67376c39b298450c321d916";
alert("JavaScript Loaded");

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city");
        return;
    }

    document.getElementById("loading").innerHTML = "Loading...";

    try {

        // Current Weather
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        document.getElementById("loading").innerHTML = "";

        if (!response.ok) {
            document.getElementById("result").innerHTML =
                `<h3>${data.message}</h3>`;
            document.getElementById("forecast").innerHTML = "";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>

            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

            <h1>${Math.round(data.main.temp)}°C</h1>

            <p><b>${data.weather[0].description}</b></p>

            <p>🤗 Feels Like: ${Math.round(data.main.feels_like)}°C</p>

            <p>💧 Humidity: ${data.main.humidity}%</p>

            <p>💨 Wind: ${data.wind.speed} m/s</p>

            <p>🌍 Pressure: ${data.main.pressure} hPa</p>

            <p>👁 Visibility: ${(data.visibility / 1000).toFixed(1)} km</p>

            <p>🌅 Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>

            <p>🌇 Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
        `;

        // Forecast
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );

        const forecastData = await forecastResponse.json();

        let html = "";

        for (let i = 0; i < forecastData.list.length; i += 8) {

            const day = forecastData.list[i];

            html += `
                <div class="forecast-card">
                    <h4>${new Date(day.dt * 1000).toLocaleDateString()}</h4>

                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

                    <p>${Math.round(day.main.temp)}°C</p>

                    <p>${day.weather[0].main}</p>
                </div>
            `;
        }

        document.getElementById("forecast").innerHTML = html;

    } catch (error) {

        document.getElementById("loading").innerHTML = "";
        document.getElementById("result").innerHTML =
            "<h3>Network Error</h3>";

        console.error(error);
    }

}
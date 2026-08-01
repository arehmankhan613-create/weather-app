const apiKey = "3d12bfd7c67376c39b298450c321d916";

async function getWeather(const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

const forecastResponse = await fetch(forecastUrl);
const forecastData = await forecastResponse.json();) {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city");
        return;
    }

    document.getElementById("loading").innerHTML = "Loading...";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        document.getElementById("loading").innerHTML = "";

        if (response.ok) {
            document.getElementById("result").innerHTML = `const forecastUrl =
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

const forecastResponse = await fetch(forecastUrl);
const forecastData = await forecastResponse.json();

let forecastHTML = "<h3>📅 5-Day Forecast</h3>";

for (let i = 0; i < forecastData.list.length; i += 8) {

    let day = forecastData.list[i];

    forecastHTML += `
        <div class="forecast-card">
            <h4>${new Date(day.dt * 1000).toLocaleDateString()}</h4>

            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

            <p><b>${day.main.temp}°C</b></p>

            <p>${day.weather[0].main}</p>
        </div>
    `;
}

document.getElementById("forecast").innerHTML = forecastHTML;
                <h2>${data.name}, ${data.sys.country}</h2>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <h1>${data.main.temp}°C</h1>
                <p>${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById("result").innerHTML =
                `<h3>${data.message}</h3>`;
        }

    } catch (error) {
        document.getElementById("loading").innerHTML = "";
        document.getElementById("result").innerHTML =<p>👁️ Visibility : ${(data.visibility / 1000).toFixed(1)} km</p>

<p>🌅 Sunrise : ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>

<p>🌇 Sunset : ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            "<h3>Network Error</h3>";
        console.error(error);
    }
}
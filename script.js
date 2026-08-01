const apiKey = "3d12bfd7c67376c39b298450c321d916";

async function getWeather() {
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
            document.getElementById("result").innerHTML = `
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
        document.getElementById("result").innerHTML =
            "<h3>Network Error</h3>";
        console.error(error);
    }
}
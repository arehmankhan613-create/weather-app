const apiKey = "3d12bfd7c67376c39b298450c321d916";

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    document.getElementById("loading").innerHTML = "Loading...";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("loading").innerHTML = "";

        if (data.cod != 200) {
    document.getElementById("result").innerHTML =
        `<h3>Error ${data.cod}</h3><p>${data.message}</p>`;
    return;
}


     document.getElementById("result").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>

            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

            <h1>${data.main.temp}°C</h1>

            <p><b>${data.weather[0].description}</b></p>

            <p>🤗 Feels Like : ${data.main.feels_like}°C</p>

            <p>💧 Humidity : ${data.main.humidity}%</p>

            <p>💨 Wind : ${data.wind.speed} m/s</p>

            <p>🌍 Pressure : ${data.main.pressure} hPa</p>
        `;

    } catch (error) {

        document.getElementById("loading").innerHTML = "";
        document.getElementById("result").innerHTML = "Something went wrong.";

    }

}
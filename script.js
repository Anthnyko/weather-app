document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    // If the user didn't type anything
    if (!city) {
        document.getElementById("result").innerHTML = `
            <p style="color:red;">Please enter a city.</p>
        `;
        document.getElementById("forecast").innerHTML = "";   // clear forecast
        return;
    }

    try {
        const response = await fetch(`https://weather-app-hoba.onrender.com/weather?city=${city}`);
        const data = await response.json();

        // If backend returned an error
        if (data.error) {
            document.getElementById("result").innerHTML = `
                <p style="color:red;">Error: ${data.error}</p>
            `;
            document.getElementById("forecast").innerHTML = "";   // clear forecast
            document.getElementById("forecast-title").innerHTML = "";
            return;
        }

        // If everything is good, display weather info
        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°F</p>
        `;

        // Fetch and display the 5-day forecast
        const forecastHTML = await getForecast(city);

        if (!forecastHTML) {
            document.getElementById("forecast").innerHTML = "";   // clear old forecast
            document.getElementById("forecast-title").innerHTML = "";
        } else {
            document.getElementById("forecast-title").innerHTML = "5-Day Forecast";
            document.getElementById("forecast").innerHTML = forecastHTML;
        }
    
    } catch (err) {
        // If fetch() itself fails (backend down, network issue, etc.)
        document.getElementById("result").innerHTML = `
            <p style="color:red;">Unable to connect to server.</p>
        `;
    }
}

async function getForecast(city) {
    const response = await fetch(`https://weather-app-hoba.onrender.com/forecast?city=${city}`);
    const data = await response.json();

    if (data.error) {
        return null; // signals failure
    }

    // Filter for entries at noon
    const noonEntries = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    let html = "";

    noonEntries.forEach(item => {
        html += `
            <div class="forecast-day">
                <p><strong>${item.dt_txt.split(" ")[0]}</strong></p>
                <p>${item.weather[0].description}</p>
                <p>${item.main.temp}°F</p>
            </div>
        `;
    });



    return html;
}


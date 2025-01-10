async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'd28057b8ccf2efb88608f67e49612b41'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();

        document.getElementById('result').style.display = 'block';
        document.getElementById('city-name').innerText = `Weather in ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        alert(error.message);
    }
}
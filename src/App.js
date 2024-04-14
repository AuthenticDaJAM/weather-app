import React, { useState } from 'react';
import axios from 'axios';
function App() {
const [weather, setWeather] = useState(null);
const [city, setCity] = useState('');
const getWeather = async (e) => {
e.preventDefault();
try {
const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=595cd8e5d5d377037b64794ffd8c7879&units=metric`);
setWeather(response.data);
} catch (error) {
console.error(error);
}
};
return (
<div className="App">
<form onSubmit={getWeather}>
<input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
<button type="submit">Get Weather</button>
</form>
{weather && (
<div>
<h2>{weather.name}</h2>
<p>{weather.main.temp}°C</p>
<p>{weather.weather[0].description}</p>
</div>
)}
</div>
);
}

export default App;
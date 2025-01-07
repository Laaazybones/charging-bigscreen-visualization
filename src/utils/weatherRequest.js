import axios from 'axios'

export async function getWeatherData() {
	const weatherData = await axios({
		url: 'https://devapi.qweather.com/v7/weather/3d?location=101270101',
		method: 'GET',
		headers: {'X-QW-Api-Key':'958dc2572f934599bec8cf8c90863aaf'}
	})

	console.log('1@get weather data: ', weatherData);
	return weatherData;
}


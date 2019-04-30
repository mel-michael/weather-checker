// External Dependencies
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

// constants
const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?zip=' 
const API_KEY = process.env.API_KEY

const getWeatherByPostalCode = async (postalCode: number) => {
	const URL = `${WEATHER_API}${postalCode},us&APPID=${API_KEY}` 
	try {
    return await axios.get(URL)
  } catch (err) {
    console.error(err)
	}
}

const getWeather = async ([locationName, postalCode]: [string, number]) => {
	const currentTime = new Date().toTimeString() 
	const currentWeather = await getWeatherByPostalCode(postalCode) 
	
	if(!currentWeather) {
		console.log('Something went wrong, please try again.')  
		process.exit(1) 
	}

  if (currentWeather && currentWeather.data) {
		const { weather } = currentWeather.data 
    console.log(`${currentTime}: There's a ${weather[weather.length - 1].description} in ${locationName}`) 
	}
}

// Call getWeather with test input
getWeather(['New York', 10005])  // Change array input to see result

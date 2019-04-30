import axios from 'axios'

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?zip=' 

const API_KEY='b496510926f77f688cf2edfb07084e0f' 


const getWeatherByZipCode = async (postalCode: number) => {
  const URL = `${WEATHER_API}${postalCode},us&APPID=${API_KEY}` 
	try {
    return await axios.get(URL)
  } catch (err) {
    console.error(err)
	}
}

const getWeather = async ([locationName, postalCode]: [string, number]) => {
  const currentTime = new Date().toTimeString()
	const currentWeather = await getWeatherByZipCode(postalCode)
	
	// console.log(currentTime, currentWeather, locationName)
	if(!currentWeather) {
		console.log('Something went wrong, please try again.') 
		process.exit(1);
	}

  if (currentWeather && currentWeather.data) {
		const { name, weather } = currentWeather.data 
    console.log(`${currentTime}: There's a ${weather[weather.length - 1].description} in ${name}, ${locationName}`)
	}
}

getWeather(['NYC', 10001])

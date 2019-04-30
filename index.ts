import axios from 'axios'

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?zip=' 

const API_KEY='b496510926f77f688cf2edfb07084e0f' 


const getWeatherByZipCode = async (postalCode: number) => {
  const URL = `${WEATHER_API}${postalCode},us&APPID=${API_KEY}` 
	axios.get(URL)
	 .then(data => console.log(data))
	 .catch(err => console.error(err))
}


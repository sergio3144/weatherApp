import { useState, useEffect } from "react"
import { WeatherForm } from "./weatherForm"
import { WeatherMainInfo } from "./weatherMainInfo"


type WeatherData = {
  current: {
    temp_c: number,
  }
  location: {
    name: string
  } 
}

const apiKey:string = import.meta.env.VITE_REACT_APP_KEY
const url:string = import.meta.env.VITE_REACT_APP_URL

const WeatherApp = ():JSX.Element => {


  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `weather | ${weather?.location.name ?? ''}`
  }, [weather])
  


  const loadInfo = async (city:string = 'london')  => {
    try {
      const request = await fetch(
        `${ url }&key=${ apiKey }&q=${ city }`
      );

      console.log(request)


      const json = await request.json();

      setWeather(json)
      console.log(weather)
    } catch (error) {
      console.log(error)
    }
  }


  const handleChangeCity = (city:string) => {
    setWeather(null);
    loadInfo(city)
  }
  

  return (
    <>
      <WeatherForm onChangeCity={ handleChangeCity }/>
      <WeatherMainInfo
        informationWeather={ weather }
      />
    </>
  )
}

export { WeatherApp }
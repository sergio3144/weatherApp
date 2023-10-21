import { useState, useEffect } from "react"
import { WeatherForm } from "./weatherForm"
import { WeatherMainInfo } from "./weatherMainInfo"
import styles from './weatherApp.module.css'
import { BounceLoader } from "react-spinners"


type WeatherData = {
  current: {
    temp_c: number,
  }
  location: {
    name: string
    lon: number
    lat: number
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

      const json = await request.json();

      setTimeout(() => {
        setWeather(json)
      }, 2000)

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
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={ handleChangeCity }/>
      { weather ? <WeatherMainInfo
        informationWeather={ weather }
        /> : 
        <div className={styles.loading}>
          <BounceLoader color="#36d7b7" />
        </div>
      }
      
    </div>
    </>
  )
}

export { WeatherApp }
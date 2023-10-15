import { useState } from "react"
import { ChangeEvent } from 'react'

type onChangeCityValue = (city: string) => void

const WeatherForm = ({ onChangeCity }: { onChangeCity: onChangeCityValue } ):JSX.Element => {
 
  const [city, setCity] = useState<string>('')

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    value.trim() !== "" && setCity(value)
  }
  
  const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChangeCity(city);
  }
  return (
    <>
      <form action="" onSubmit={ handleSubmit }>
        <input type="text" onChange={ onChange } />
      </form>
    </>
  )
}

export { WeatherForm }
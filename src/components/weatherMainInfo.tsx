type WeatherDataInfo = {
  informationWeather: null | any
}

const WeatherMainInfo = ({ informationWeather }:WeatherDataInfo):JSX.Element => {
  return (
    <>
      <div>{ informationWeather?.location.name }</div>
      <div>{ informationWeather?.location.country }</div>

      <div>
        <img 
          src={`http:${informationWeather?.current.condition.icon}`} 
          width={128}
          alt={informationWeather?.current.condition.text} />
      </div>
      <div>
        <div>{ informationWeather?.current.condition.text }</div>
        <div>{ informationWeather?.current.temp_c }°</div>
      </div>
    </>
  )
}

export { WeatherMainInfo }
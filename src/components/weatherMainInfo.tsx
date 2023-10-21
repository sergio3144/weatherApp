import styles from './weatherMainInfo.module.css'

type WeatherDataInfo = {
  informationWeather: null | any
}

const WeatherMainInfo = ({ informationWeather }:WeatherDataInfo):JSX.Element => {
  return (
    <>
    <div className={styles.mainInfo}>
      <div className={styles.city}>{ informationWeather?.location.name }</div>
      <div className={styles.country}>{ informationWeather?.location.country }</div>
      <div className={styles.row}>
        <div>
          <img 
            src={`http:${informationWeather?.current.condition.icon}`} 
            width={128}
            alt={informationWeather?.current.condition.text} />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.conditions}>{ informationWeather?.current.condition.text }</div>
          <div className={styles.current}>{ informationWeather?.current.temp_c }°</div>
        </div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d154412.0042748097!2d${ informationWeather?.location.lon }4!3d${ informationWeather?.location.lat }8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1697857422140!5m2!1ses-419!2sco`}
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
      
    </>
  )
}

export { WeatherMainInfo }
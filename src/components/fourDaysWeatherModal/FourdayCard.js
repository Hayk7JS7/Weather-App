import React from 'react'
import Dayconventer, { Kelvintemperature } from '../../logic/smallLogics'

const FourdayCard = ({day, weatherIcon, temp, description}) => {
  return (
    <div className='container'>
      <div className="day"><Dayconventer date={day}/></div>
      <div className="weather-icon"><img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon..." className='icon' /></div>
      <div className="temp"><Kelvintemperature temp={temp}/></div>
      <div className='description'><p>{description}</p></div>
    </div>
  )
}

export default FourdayCard

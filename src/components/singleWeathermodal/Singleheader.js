import React from 'react'
import { useSelector } from 'react-redux'
import Clock from '../clocks_modal/Clocks'
import { FirstletterCap, Kelvintemperature } from '../../logic/smallLogics'
import './Singlemodal.css'

const Singleheader = () => {
    const { data } = useSelector(state => state.weatherModal)
    
  return (
    <div className="main-info">
      <div className='main-info-child'>
        <Clock timezone={data.timezone} />
      </div>
  
      <div className='main-info-child'>
        <div className="center-wrapper">
          <h3><FirstletterCap word={data.name}/>, {data.sys.country}</h3>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
          <h1><Kelvintemperature temp={data.main.temp}/></h1>
          <h3>{data.weather[0].description}</h3>
        </div>
      </div>
    </div>
  )
}

export default Singleheader
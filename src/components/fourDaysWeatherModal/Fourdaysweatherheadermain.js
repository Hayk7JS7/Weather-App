import React, { useEffect, useState } from 'react';
import './Fourdaymodal.css';
import { useSelector } from 'react-redux';
import FourdayCard from './FourdayCard';
import { uniqueArray } from '../../logic/smallLogics';

const Fourdaysweatherheadermain = () => {
    const [uniqueArr, setUniqueArr] = useState([])
    const {fourDayWeatherArr} = useSelector(state => state.fourDayWeatherModal)
    
    useEffect(() => {
        if(fourDayWeatherArr){
            const newArr = uniqueArray(fourDayWeatherArr)
            setUniqueArr(newArr)
         }
    }, [fourDayWeatherArr])
    
  return (
    <div>
      <h3 className='title'>Multi-Day Weather Forecast: What to Expect in the Coming Week</h3>
      <div className='weather-container'>
        {uniqueArr && uniqueArr.map((day, key) => {
            return <div key={key}><FourdayCard day={day.dt_txt} weatherIcon={day.weather[0].icon} temp={day.main.temp} description={day.weather[0].description}/></div>
        })}
      </div>
    </div>
  )
}

export default Fourdaysweatherheadermain;
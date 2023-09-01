import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Singlemodal.css'
import { close, dataFalse } from '../../features/modal_one_day_weather/weatherModalSlice'
import { fourDayWeatherWithAxios, openModal } from '../../features/four_days_fourcast_modal/fourDayWeatherSlice'


const Singlemodalfooterlogic = () => {
    const { data } = useSelector(state => state.weatherModal)
    const dispatch = useDispatch()

    const handleClick = () => {
      dispatch(dataFalse())
      dispatch(close())      
    }

    const moveToClick = () => {
      dispatch(fourDayWeatherWithAxios(data.name))
      dispatch(openModal())
    }
  return (
    <div className='button-parent'>
      <button className='my-button' onClick={handleClick}>Search New One!</button>
      <button className='my-button' onClick={moveToClick}>Find more info</button>
    </div>
  )
}

export default Singlemodalfooterlogic
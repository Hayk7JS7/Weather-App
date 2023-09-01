import React from 'react'
import './Fourdaymodal.css'
import { useDispatch } from 'react-redux'
import { open } from '../../features/modal_one_day_weather/weatherModalSlice'

const Fourdaysfooter = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(open())
    }
  return (
    <div className='button-parent'>
      <button className="my-button"  onClick={handleClick}>search new one</button>
      <button className="my-button">explore more</button>
    </div>
  )
}

export default Fourdaysfooter
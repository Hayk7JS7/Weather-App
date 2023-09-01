import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataWithAxios, open } from '../../features/modal_one_day_weather/weatherModalSlice';
import Erroranimation from '../animations/error/Error';
import './Homeheader.css';

const Homeheader = () => {
  const [cityName, setCityNames] = useState("")
  const dispatch = useDispatch()
  const { error, data } = useSelector(state => state.weatherModal)


  useEffect(() => {
    if(data){
      dispatch(open())
    }
    if(error){
      setCityNames("")
    }
  }, [data, error])


  if(data){
  }
  const handleClick = (e) => {
    e.preventDefault()
    if(cityName === "" || /\d/.test(cityName)) return setCityNames("")
      dispatch(fetchDataWithAxios(cityName))
  }

  return (
    <header className="container">
          <h1 className="title">Weather App</h1>
          <form onSubmit={handleClick}>
            <div className="search-form">
              <input className="search-input" type="text" placeholder="Enter location" value={cityName} onChange={(e) => setCityNames(e.target.value)} />
              <button className="search-button" >Get Weather</button>
            </div>
          </form>
        <div className="request-status-changed-animations">
          {error && <Erroranimation/>}
        </div>
    </header>
  )
}

export default Homeheader
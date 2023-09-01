import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, setFourDayWeather } from '../../features/four_days_fourcast_modal/fourDayWeatherSlice';
import Fourdaysweatherheadermain from '../../components/fourDaysWeatherModal/Fourdaysweatherheadermain';
import './Fourdaymodal.css';
import ChartPage from '../charts/Chart';
import { setOpenChart } from '../../features/charts/Chartslice';

const Fourdaymodal = () => {
    const { data } = useSelector(state => state.fourDayWeatherModal)
    const { openChart } = useSelector(state => state.chart)
    const dispatch = useDispatch()

    const handleClick = () => {
      dispatch(closeModal())
    }

    useEffect(() => {
      if(data){
      dispatch(setFourDayWeather(data.list))
      }
    }, [data])
    
  return (
    <>
    {openChart ? <ChartPage/> : 
    <div className='modal-for-days'>
        <Fourdaysweatherheadermain/>
        <div className="button-parent">
          <button className="my-button" onClick={handleClick} >go back</button>
          <button className="my-button" onClick={() => dispatch(setOpenChart(true))}>explore more</button>
        </div>
    </div>
    }
    </>
  )
}

export default Fourdaymodal
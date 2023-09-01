import React from 'react';
import ChartBar from '../../components/chart/Chartbar';
import Charinfo from '../../components/chart/Charinfo';
import { useDispatch } from 'react-redux';
import { setOpenChart } from '../../features/charts/Chartslice';
import { closeModal } from '../../features/four_days_fourcast_modal/fourDayWeatherSlice';
import { close, dataFalse } from '../../features/modal_one_day_weather/weatherModalSlice';

const ChartPage = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setOpenChart(false))
    dispatch(closeModal())
    dispatch(dataFalse())
    dispatch(close())  
  }
  return (
    <div>
      <ChartBar/>
      <Charinfo/>
      <div className='button-parent'>
        <button className="my-button" onClick={() => dispatch(setOpenChart(false))}>go back</button>
        <button className="my-button" onClick={handleClick}>search new</button>
      </div>
    </div>
  )
}

export default ChartPage;
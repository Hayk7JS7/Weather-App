import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortLogic } from '../../logic/sortLogic'
import { setChartArr, setDisplayedChartIndexDecreament, setDisplayedChartIndexIncreament } from '../../features/charts/Chartslice'
import { WeekendDayConventer } from '../../logic/smallLogics'
import './Chartbar.css'

const Charinfo = () => {
    const { fourDayWeatherArr}  = useSelector(state => state.fourDayWeatherModal)
    const { chartArray, displayedChartIndex } = useSelector(state => state.chart)
    const dispatch = useDispatch()

    
    const moveOnHandler = () => {
      dispatch(setDisplayedChartIndexIncreament())
    }
    const goBackHandler = () => {
      dispatch(setDisplayedChartIndexDecreament())
    }

    useEffect(() => {
        if(fourDayWeatherArr){
            dispatch(setChartArr(sortLogic(fourDayWeatherArr)))
        }
    }, [fourDayWeatherArr])

  return (
    <div>
      <div className='graph_day'>
        <h2><span onClick={goBackHandler} className='clickable_span'>⇦</span> <WeekendDayConventer date={chartArray?.[displayedChartIndex]?.data?.[0].dt_txt}/> <span onClick={moveOnHandler} className='clickable_span'>⇨</span></h2>
      </div>
    </div>
  )
}

export default Charinfo
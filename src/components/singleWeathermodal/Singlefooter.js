import React from 'react'
import { Visibility, Windspeed } from '../../logic/smallLogics'
import { useSelector } from 'react-redux'
import './Singlemodal.css'

const Singlefooter = () => {
    const { data } = useSelector(state => state.weatherModal)

  return (
    <div className="other-measurements-part">
        <div className="measurement">
          <p>Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="measurement">
          <p>Pressure</p>
          <p>{data.main.pressure}hPa</p>
        </div>
        <div className="measurement">
          <p>Wind Speed</p>
          <Windspeed speed={data.wind.speed}/>
        </div>
        <div className="measurement">
          <p>Visibility</p>
          <Visibility count={data.visibility}/>
        </div>
    </div>
  )
}

export default Singlefooter
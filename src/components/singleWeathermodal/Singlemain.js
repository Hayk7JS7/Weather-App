import React from 'react'
import { Kelvintemperature } from '../../logic/smallLogics'
import { useSelector } from 'react-redux'
import './Singlemodal.css'

const Singlemain = () => {
    const { data } = useSelector(state => state.weatherModal)

  return (
    <div className="additional-info">  
      <div className="temperature-part">  
        <div className="temperature-measurement">
          <p>Feels Like</p>
          <h4><Kelvintemperature temp={data.main.feels_like}/></h4>
        </div>
        <div className="temperature-measurement">
          <p>Min🠗</p>
          <h4><Kelvintemperature temp={data.main.temp_min}/></h4>
        </div>
        <div className="temperature-measurement">
          <p>Max🠕</p>
          <h4><Kelvintemperature temp={data.main.temp_max}/></h4>
        </div>
      </div>
    </div>
  )
}

export default Singlemain
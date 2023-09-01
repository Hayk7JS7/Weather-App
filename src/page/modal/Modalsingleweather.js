import React from 'react';
import Singleheader from '../../components/singleWeathermodal/Singleheader';
import Singlemain from '../../components/singleWeathermodal/Singlemain';
import Singlefooter from '../../components/singleWeathermodal/Singlefooter';
import Singlemodalfooterlogic from '../../components/singleWeathermodal/Singlemodalfooterlogic';
import { useSelector } from 'react-redux';
import Fourdaymodal from '../fourDaysModal/Fourdaymodal';


const Modalsingleweather = () => {
  const {openFourDaysModal} = useSelector(state => state.fourDayWeatherModal)

    return (
      <>
        {openFourDaysModal ? <Fourdaymodal/> :
          <div className='modal_single_weather'> 
            <Singleheader/>
            <Singlemain/>
            <Singlefooter/>
            <Singlemodalfooterlogic/>
          </div>
        }
      </>
    )
}
export default Modalsingleweather
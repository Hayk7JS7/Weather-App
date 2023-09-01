import React from 'react';
import './Home.css';
import Homeheader from '../../components/home/Homeheader';
import Homemain from '../../components/home/Homemain';

const Home = () => {
    return (
        <div className='home'>
          <Homeheader/>
          <Homemain/>
        </div>
      )
}

export default Home;
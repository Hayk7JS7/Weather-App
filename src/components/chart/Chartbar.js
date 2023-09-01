import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart, LineController, PointElement, registerables } from 'chart.js';
import { useSelector } from 'react-redux';
import './Chartbar.css'

Chart.register(LineController, PointElement, ...registerables);
Chart.defaults.color = '#FFFFFF'
Chart.defaults.borderColor = '#00000040'

const ChartBar = () => {
  const {chartArray, displayedChartIndex} = useSelector(state => state.chart)
  if(chartArray === [])return null;
  const chartData = chartArray[displayedChartIndex]

  const data = {
    labels: chartData?.data?.map(date => date?.dt_txt?.substring(12, Infinity)),
    datasets: [
      {
        label: 'Temperature',
        data: chartData?.data?.map(date => Math.floor(date?.main?.temp - 273.15)),
        fill: false,
        borderColor: 'rgb(192, 75, 75)',
        tension: 0.1,
        backgroundColor: "white",
        pointBorderColor: "black",
        hidden: false
      },
      {
        label: 'Humidity',
        data: chartData?.data?.map(date => date?.main?.humidity),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: "white",
        pointBorderColor: "black",
        hidden: true
      },
      {
        label: 'Wind Speed',
        data: chartData?.data?.map(date => date?.wind?.speed),
        fill: false,
        borderColor: 'rgb(151, 7, 159)',
        backgroundColor: "white",
        pointBorderColor: "black",
        tension: 0.1,
        hidden: true
      },
    ],
  }
  const options = {
    maintainAspectRatio: false,
  }
  return (
    <div className='chart-container'>
      <h1 className='graph'>Graphics</h1>
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartBar;
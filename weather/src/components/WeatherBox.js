import React from 'react'

const WeatherBox = ({weather}) => {
    //console.log(weather)
    return (
        <div className='weatherBox'>
            <div>{weather && weather.name}</div>
            <h2>{weather?.main.temp}도</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    )
}

export default WeatherBox
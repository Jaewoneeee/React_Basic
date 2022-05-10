import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, current}) => {
    console.log(cities)
    return (
        <div>
            <Button variant="warning" onClick={() => {current()}}>Current</Button>
            {
                cities.map( (item, index) => {
                    return <Button 
                        variant="warning" 
                        key={index} 
                        onClick={() => setCity(item)}>
                            
                            {item}
                        </Button>
                })
            }
        </div>
    )
}

export default WeatherButton
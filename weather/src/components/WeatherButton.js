import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, handleCityChange, selectedCity }) => {
    console.log(cities)

    const [test, setTest] = useState('warning');

    const click = () => {
        // 이 방식으로하면 저 안에 item값이 바뀌면서 랜더링이 되고, 그다음에 또 랜더링이 되는 구조라서 두번눌러야 색깔이 바뀐다
        console.log('클릭함수')
        setTest('dark')
        console.log(test)
    }

    return (
        <div>
            <Button variant={`${selectedCity == '' ? "dark" : "warning"}`} onClick={() => handleCityChange("current")}>Current</Button>
            {
                cities.map( (item, index) => {
                    return <Button 
                        //variant={test}
                        variant={`${selectedCity == item ? "dark" : "warning"}`}
                        key={index} 
                        onClick={() => handleCityChange(item)}>
                            
                            {item}
                        </Button>
                })
            }
        </div>
    )
}

export default WeatherButton
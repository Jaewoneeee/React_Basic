import React, { useState } from 'react'

const Block = (props) => {

    const [boxColor, setBoxColor] = useState("box")

    const click = () => {
        console.log("click")
        setBoxColor("boxClick")    
    }
 
    return (
    <>
        <div className={boxColor} onClick={ () => click()} >{props.blockNum.id}</div>
    </>
    )
}

export default Block
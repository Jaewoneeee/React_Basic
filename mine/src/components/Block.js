import React, { useState } from 'react'

const Block = (props) => {

    const [boxColor, setBoxColor] = useState("box")

    const click = () => {
        console.log("click")
        setBoxColor("boxClick")
        //randomNumber()   
    }

    const test = () => {
        for (let i=0; i<5; i++) {
            if(props.blockNum.id === props.random[i]) {
                return "mine"
            }
            else {
                return ""
            }
        }
    }

    test()
    console.log(test())
    const [mine, setMine] = useState("")

    return (
    <>
        <div className={boxColor} onClick={ () => click()} >
            {props.blockNum.id}
            <div className="mine"></div>
        </div>
    </>
    )
}

export default Block
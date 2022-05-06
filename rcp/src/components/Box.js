import React from 'react'

const Box = (props) => {

  console.log(props)

  return (
      <div className={props.boxColor}>
        <h1>{props.title}</h1>
        <img className='img_item' src={props.item && props.item.img} />
        <h2>{props.result}</h2>
      </div>
  )
}

export default Box
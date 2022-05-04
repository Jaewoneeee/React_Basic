import React from 'react'

const Box = (props) => {
    //console.log("props : ", props)
  return (
    <div className='box'>
        Box<p>{props.num}</p>        
        <p>{props.name}</p> 
        {/* props도 객체기 떄문에 .name이란 key값에 value값을 가져온다 */}
    </div>
  )
}

export default Box
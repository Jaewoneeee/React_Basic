import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetaliPage = () => {

    const {id} = useParams();

    //console.log(params)
    // 객체가 반환이됨. 
    // 파라미터로 지정해둔 값이 알아서 key값으로 들어가고 
    // 해당 url의 파라미터값이 value값으로 들어간다

  return (
    <div>
        <h3>ProductDetaliPage {id} </h3>
    </div>
  )
}

export default ProductDetaliPage
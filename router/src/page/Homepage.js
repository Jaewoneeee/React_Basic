import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom' 

const Homepage = () => {

    // const {id} = useParams();

    // console.log(useParams())

    const navigate = useNavigate()

    const goProductPage = () => {
        navigate('/products?q=pants')
    }

  return (
    <div>
        <h1>Homepage</h1>
        <Link to='/about'> About </Link>
        <button onClick={goProductPage}>go to products</button>
    </div>
  )
}

export default Homepage
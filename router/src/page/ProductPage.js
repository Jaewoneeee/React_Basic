import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {

    let [query, setQuery] = useSearchParams()
    console.log(query.get("q"))

  return (
    <div>
       <h2>Show All Products</h2>
    </div>
  )
}

export default ProductPage
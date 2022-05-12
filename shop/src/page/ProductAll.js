import  React , { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import {Container ,Row, Col} from 'react-bootstrap' 

const ProductAll = () => {

    const [productList, setProductList] = useState([])

    const getProducts = async () => {
        let url = 'http://localhost:5000/products'
        let res = await fetch(url)
        let data = await res.json();
        console.log(data)
        setProductList(data)
    }

    useEffect( () => {
        getProducts()
    },[])

  return (
    <div>
        <Container>
            <Row>
                <Col lg={3}><ProductCard/></Col>
                <Col lg={3}><ProductCard/></Col>
                <Col lg={3}><ProductCard/></Col>
                <Col lg={3}><ProductCard/></Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
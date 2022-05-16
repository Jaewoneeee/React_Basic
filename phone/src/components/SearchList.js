import React from 'react'
import { Row, Col } from 'react-bootstrap'

const SearchList = ({item}) => {
  return (
    <Row>
        <Col lg={1}>
            <img width='50px' src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'/>
        </Col>
        <Col lg={11}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default SearchList
import React,{ useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const SearchBox = () => {

    const dispatch = useDispatch();

    const [searchName , setSearchName] = useState('')

    const searchingName = (e) => {
        e.preventDefault();

        dispatch({
            type : "SEARCHNAME",    
            payload : { searchName }
        })
    }

  return (
    <Row>
        <Form onSubmit={searchingName}>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름" onChange={(e)=>setSearchName(e.target.value)} />
            </Col>    
            <Col lg={2}>
                <Button type='submit'> 찾기 </Button>
            </Col>
        </Form>    
    </Row>
  )
}

export default SearchBox
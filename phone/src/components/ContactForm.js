import React,{ useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const ContactForm = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const addContact = (e) => {
        // submit하면 페이지가 새로고침됨 그걸 막아주자
        e.preventDefault();

        //dispatch({type : "ADDCONTACT", payload : { name : name, phonNumber : phonNumber}})
        dispatch({type : "ADDCONTACT", payload : { name , phoneNumber }})  // ES6최신문법, key value값을 같게

    }

  return (
    <div>
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름" onChange={(e)=>setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>연락처</Form.Label>
                <Form.Control type="number" placeholder="연락처" onChange={(e)=>setPhoneNumber(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                추가
            </Button>
        </Form>

    </div>
  )
}

export default ContactForm
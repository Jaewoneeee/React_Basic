import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList'
import { Container, Row, Col } from 'react-bootstrap'


// 1. 왼쪽에는 연락처 등록 폼, 오른쪽에는 연락처 리스트와 search바
// 2. 리스트에 유저 이름과 전화번호 추가 가능
// 3. 리스트에 아이템이 몇개 있는지 보임
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <div>
        <h1 className='title'>Hello phone book</h1>
        <Container>
          <Row>
            <Col>
              <ContactForm />
            </Col>
            <Col>
              <ContactList />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;

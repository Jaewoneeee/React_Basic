import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import ProductPage from './page/ProductPage';
import ProductDetaliPage from './page/ProductDetaliPage';
import LoginPage from './page/LoginPage';
import Userpage from './page/Userpage';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'

function App() {

    const [authenticate, setAuthenticate] = useState(true)
  // 얘는 대문자로 시작하니까 컴포넌트임!
    const PrivateRoute = () => {
      return authenticate == true ? <Userpage/> : <Navigate to='/login'/>
    }


  return (
    <div>
      <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/about" element={ <About />} />
        <Route path="/products" element={ <ProductPage />} />
        <Route path="/products/:id" element={ <ProductDetaliPage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/user" element={ <PrivateRoute />} />
        <Route path="/*" element={ <Homepage />} /> 
      </Routes>
    </div>
  );
}

export default App;
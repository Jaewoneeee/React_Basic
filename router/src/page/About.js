import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    const gotoHompage = () => {
        navigate("/")
    }

  return (
    <div>
        <h2>About</h2>
        <button onClick={gotoHompage}>Homepage</button>
    </div>
  )
}

export default About
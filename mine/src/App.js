import './App.css';
import Block from './components/Block.js';
import { useState } from 'react';
import  data  from './data.js'

function App() {

  const [blockNum, setBlockNum] = useState(data)
  console.log(data)

  const randomArray = [] 

  const randomNumber = () => {

    for( let i=0; i<5; i++) {
      let number = Math.floor(Math.random() * 25)
      randomArray.push(number)
      //console.log(number)
    }
    //console.log(randomArray)
    return randomArray
  }    

  randomNumber()
  console.log(randomArray)

  const [random, setRandom] = useState(randomArray)
  console.log(random)

  return (
    <>
    <h3> 지뢰 찾기 </h3>
    <div className='gridBox'>
      {
        blockNum.map( (a, i) => {
          return(
            <Block blockNum={blockNum[i]} random={random} />
          )
        })
      }
    </div>
    </>
  );
}

export default App;

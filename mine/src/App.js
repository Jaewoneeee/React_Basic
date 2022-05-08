import './App.css';
import Block from './components/Block.js';
import { useState } from 'react';
import  data  from './data.js'

function App() {

  const [blockNum, setBlockNum] = useState(data)
  console.log(data)



  return (
    <>
    <h3> 지뢰 찾기 </h3>
    <div className='gridBox'>
      {
        blockNum.map( (a, i) => {
          return(
            <Block blockNum={blockNum[i]} />
          )
        })
      }
    </div>
    </>
  );
}

export default App;

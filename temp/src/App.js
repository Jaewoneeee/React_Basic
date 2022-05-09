import './App.css';
import Box from './components/Box'
import {useState, useEffect} from 'react'

function App() {

  let counter = 0
  const [counter2, setCounter2] = useState(0);
  // 매개변수로 초기값이 들어가고, array를 반환
  // 초기값이 들어간 state를 반환하고, 두번째는 함수를 반환  


  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter : ", counter, ", counter2 : ", counter2)
  }

  // 값에 대한 연산이 끝나기전에 콘솔이 찍히는바람에 이게먼저 찍힘. 
  // 비동기작업이 이루어지기 때문. 좀 헷갈린다 이건
  // 변수는 값을 바꾸면 바로 적용이 되지만 
  // state는 좀 비쌈. 함수가 바로 실행되는게 아니라 함수가 끝날때까지 기다렸다가 실행됨 그래서 이전값이 먼저 찍힌다. 

  // 리랜더링 = 컴포넌트를 다시 그려준다. 그래서 counter = 0으로 초기화가 되서 +1 된상태로서 1만 계속 찍힌다. 

  //1. 유저가 버튼을 클릭한다.
  //2. counter+1해서 1이됨
  //3. setState함수 호출
  //4. console.log실행.
  //5. 변수값은 1로 보이고, state값은 아직 안변했기 때문에 그 전에 값이 보인다,.
  //6. 함수끝
  //7. app이 다시 re render
  // let counter = 0 을 거치면서 counter값은 다시 0으로 초기화가된다. 
  // state값은 update가되면서 다시 완료

  useEffect( () => {
    console.log('useEffect1 fire')
  }, [])

  useEffect( () => {
    console.log('useEffect2 fire' , counter2)
  }, [counter2])

  return (
    <div>
      {console.log("render")}
      <Box name='리사' num={1}/> 
      {/* 얘가 객체다. 여기서 이거저거 설정을하고 할일을 하게끔 만드는것*/}
      <Box name='제니' num={2}/>
      <Box name='지수' num={3}/>
      <Box name='로제' num={4}/>

    
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;

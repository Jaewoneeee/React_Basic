import './App.css';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  //const [count, setCount] = useState(0)
  const dispatch = useDispatch()
                          // state에있는 모든값들. 그 객체안에 있는 count만 들고온다
  let count = useSelector(state=>state.count)
  let id = useSelector(state=>state.id)
  let pw = useSelector(state=>state.pw)

  const increase = () => {
    // action은 단순히 객체. 다만 type과 payload라는 key가 있어야한다.
    // type : action의 이름
    // useDispatch를 가지고 action을 던저준 작업 
    dispatch({type : "INCREAMENT" , payload : {num:5}})
    
    //setCount(count + 1)
  }

  const decrease = () => {
    dispatch({type : "DECREAMENT", payload : {num:1}})
  }

  const login = () => {
    dispatch({type : "LOGIN", payload : {id : 'jaewon', pw : 1234}})
  }

  return (
    <div>
      <h2>{count}</h2>
      <h2>{id}</h2>
      <h2>{pw}</h2>
      <button onClick={()=>increase()}>증가</button>
      <button onClick={()=>decrease()}>감소</button>
      <button onClick={()=>login()}>버튼</button>
      
    </div>
  );
}

export default App;

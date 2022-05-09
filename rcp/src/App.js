import { useState } from 'react'
import './App.css';
import Box from './components/Box.js'
import { Paper, Rock, Scissors } from './img'

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 램덤하게 아이템 선택
// 5. 3 4 결과를 가지고 승패 따지기
// 6. 박스 테두리 결과에따라 바꾸기 (이기면 초록, 지면 빨강, 무 검정) 

const choice = {
  Rock : {
    name : "Rock",
    img : Rock
  },
  Scissors : {
    name : "Scissors",
    img : Scissors
  },
  Paper : {
    name : "Paper",
    img : Paper
  }
}

function App() {

  // const를 사용하는 이유도 state값만 바꾸게 하기위해서 
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [userResult, setUserResult] = useState("")
  const [computerResult, setComputerResult] = useState("")
  const [userBoxColor, setuserBoxColor] = useState("")
  const [computerBoxColor, setcomputerBoxColor] = useState("")
  const [tryNum, setTryNum] = useState(10)
  const [winNum, setWinNum] = useState(0)

  const play = (userChoice) => {
    console.log("선택됨", userChoice)
    setUserSelect(choice[userChoice])

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice)

    setUserResult(judgementUser(choice[userChoice],computerChoice))
    setComputerResult(judgementComputer(choice[userChoice],computerChoice))

    setuserBoxColor(judgementUserBoxColor(choice[userChoice],computerChoice))
    setcomputerBoxColor(judgementComputerBoxColor(choice[userChoice],computerChoice))

    setTryNum(tryNum - 1)

    if(userResult === "Win!"){
      setWinNum(winNum +1)
    }
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice) // 그냥 내장함수. 객체의 key값만 뽑아서 배열로 담아주는 역할 
    console.log(itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    console.log(randomItem)

    let final = itemArray[randomItem]
    console.log(final)

    return choice[final]
  }

  const judgementUser = (user, computer) => {

    console.log(user, computer)
    
    if (user.name === computer.name){
      return "tie"
    } 
    else if(user.name === "Rock") return computer.name === "Scissors" ? "Win!" : "Lose!";
    else if(user.name === "Scissors") return computer.name === "Paper" ? "Win!" : "Lose!";
    else if(user.name === "Paper") return computer.name === "Rock" ? "Win!" : "Lose!";
  }

  const judgementUserBoxColor = (user, computer) => {

    console.log(user, computer)
    
    if (user.name === computer.name){
      return "box"
    } 
    else if(user.name === "Rock") return computer.name === "Scissors" ? "box_win" : "box_lose";
    else if(user.name === "Scissors") return computer.name === "Paper" ? "box_win" : "box_lose";
    else if(user.name === "Paper") return computer.name === "Rock" ? "box_win" : "box_lose";
  }


  const judgementComputer = (user, computer) => {

    console.log(user, computer)
    
    if (user.name === computer.name){
      return "tie"
    } 
    else if(user.name === "Rock") return computer.name === "Scissors" ? "Lose!" : "Win!";
    else if(user.name === "Scissors") return computer.name === "Paper" ? "Lose!" : "Win!";
    else if(user.name === "Paper") return computer.name === "Rock" ? "Lose!" : "Win!";
  }

  const judgementComputerBoxColor = (user, computer) => {

    console.log(user, computer)
    
    if (user.name === computer.name){
      return "box"
    } 
    else if(user.name === "Rock") return computer.name === "Scissors" ? "box_lose" : "box_win";
    else if(user.name === "Scissors") return computer.name === "Paper" ? "box_lose" : "box_win";
    else if(user.name === "Paper") return computer.name === "Rock" ? "box_lose" : "box_win";
  }

  // 교수님코드. 확실히 간결하구만.
  const computerJudge = (result) => {
    return result === "win" ? "lose" : result === "tie" ? "tie" : "win";
  }
  
  
  return (
    <>
      <div className="main"> 
        
        <Box title='you' item={userSelect} result={userResult} boxColor={userBoxColor}/>
        <Box title='computer' item={computerSelect} result={computerResult} boxColor={computerBoxColor}/>
      </div>
      <div className="main">
        <button onClick={()=>play("Scissors")}>가위</button>
        <button onClick={()=>play("Rock")}>바위</button>
        <button onClick={()=>play("Paper")}>보</button>
        {/* 랜더링이 되면서 함수가 바로 호출되기때문에 콜백함수고 비동기 처리를 해줘야한다 */}
      </div>
      <div> 남은횟수 : {tryNum}</div>
      <div> 이긴횟수 : {winNum}</div>
    </>
  );
}

export default App;

import React, { Component } from 'react'
import BoxClass from './components/BoxClass';

export default class AppClass2 extends Component {
    // 생성자 : 클래스를 생성할떄 호출하는 함수
    // 생성자 안에서 props를 쓰려고 props를 가져옴

    // functinon 에서는 state를 하나하나 따로 만들었다면
    // class에서는 state라는 객체를 하나 만들고 그 안에 내가 원하는 state를 다 넣으면됨
    constructor(props) {
        super(props)
        this.state = {
            counter2 : 0,
            num :1,
            value: 0
        };
        console.log("constructor")
    }

    // class에서는 함수앞에 const를 붙여주지 않는다
    // 개별로 하나씩 만들어주어야했던 function과 달리, 한번에 만들고 한번에 업데이트함 
    increase = () => {
        // class에서 제공해주는 함수
        // object안에 내가 바꾸고 싶은 값을 쓰면된다
        this.setState({
            counter2 : this.state.counter2 + 1,
            value : this.state.value + 1
        })
    }


  render() {
    return (
      <div>
        <div>{this.state.counter2}</div>
        {/* 이 class에 있는 increase이기 때문에 this꼭 써주기 */}
        <button onClick={this.increase}>클릭!</button>
        <BoxClass num={this.state.value}/>
      </div>
    )
  }
}

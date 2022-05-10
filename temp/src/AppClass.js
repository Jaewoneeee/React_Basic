import React, { Component } from 'react'
import BoxClass from './components/BoxClass.js';

export default class AppClass extends Component {

    // 생성자 : 클래스를 생성할떄 호출하는 함수
    // 생성자 안에서 props를 쓰려고 props를 가져옴 (super를 해줘야함)
    constructor(props) {
        super(props)
        this.state = {
            counter2 : 0,
            num :1,
            value: 0
        };
        console.log("constructor")
    }

    // 객체의 형태로 state값 여러가지를 한번에 바꿀 수 있다
    increase = () => {
        this.setState({counter2 : this.state.counter2 + 1, value: this.state.value + 1})
        console.log("increas function", this.state)
    }

    componentDidMount() {
        // api 콜 why? 랜더가 끝나고 실행되기 때문 
        console.log("componentDidMount")
    }

    // 최신업데이트된 값을 가져온다
    componentDidUpdate() {
        console.log("componentDidUpdate", this.state)
    }

  render() {
      console.log("render")
    return (
        <div>
            <div>{this.state.counter2}</div>
            <button onClick={this.increase}>클릭!</button>
            {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
        </div>
    )
  }
}

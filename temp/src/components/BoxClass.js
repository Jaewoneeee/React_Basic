import React, { Component } from 'react'

export default class BoxClass extends Component {
    componentWillUnmount() {
        console.log("bye bye")
    }
    render() {
        return (
        <div>
            {/* 여기서도 class를 사용하려면 this! */}
            Box{this.props.num}
        </div>
        )
    }
}

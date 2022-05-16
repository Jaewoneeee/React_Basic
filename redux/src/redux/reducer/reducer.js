// 여기서 우리가 이제 모든 state를 관리한다

let initialState = {
    count : 0,
    id : '',
    pw : ''
}


// 매개변수 2개. state와 action
function reducer(state=initialState, action) {
    console.log(action)
    // if(action.type === "INCREAMENT"){
    //     // 카운트에 +1한 값을 넣어준다
    //     // ...state : 다른 state값은 유지하되 내가 바꾸고 싶은것만 바꾸려고  
    //     // 새로운 객체를 전달받아야 데이터가 바뀐걸 인지함
    //     // 객체를 복사해 새로운 객체를 보냄
    //     return {...state, count: state.count +1}
    // }

    switch(action.type) {
        case "INCREAMENT" :
            //return {...state, count: state.count +1};
            return {...state, count: state.count + action.payload.num};

        case "DECREAMENT" :
            // 이런식으로 조건문을 주면됨. 맞지않으면 밑에 있는 default값을 return하겠지ㅇㅇ
            if(state.count > 0)
            return {...state, count : state.count - action.payload.num}

        case "LOGIN" :
            return {
                ...state,
                id : action.payload.id,
                pw : action.payload.pw
            }

        default :
            return {...state};
            
    }

    //return {...state}
}

export default reducer

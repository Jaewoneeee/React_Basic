import { createStore } from 'redux'
import reducer from './reducer/reducer'

// createStore는 store만들어주는거 
// reducer는 말그대로 함수임 
// reducer라는 함수로 store를 만든거임

let store = createStore(reducer)

export default store;
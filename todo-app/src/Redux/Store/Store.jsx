import {applyMiddleware, createStore} from 'redux'
import todoReducer from '../Reducer/Reducer'
import {thunk} from 'redux-thunk'

const store = createStore(todoReducer,applyMiddleware(thunk))

export default store
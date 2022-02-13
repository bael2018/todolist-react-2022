import { rootReducer } from './reducers'
import { createStore , applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { todosWatcher } from './saga/todosSaga'
const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(rootReducer , applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(todosWatcher)
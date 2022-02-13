import { todosActions, todosActionTypes } from '../actions/todos-action'
import { takeEvery , put } from 'redux-saga/effects'
import { API_URL } from '../../constants'
import axios from 'axios'

function* todosWorker(){
    try {
        yield put(todosActions.todosAction()) 
        const response = yield axios.get(API_URL)
        yield put(todosActions.todosResolvedAction(response.data))
    } catch (error) {
        yield put(todosActions.todosRejetedAction(error.message))
    }
}

export function* todosWatcher(){
    yield takeEvery(todosActionTypes.TODOS_SAGA_HANDLER , todosWorker)
}
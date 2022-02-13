import { combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { paginationReducer } from './paginationReducer'
import { modalReducer } from './modalReducer'

export const rootReducer = combineReducers({
    todo: todoReducer,
    paginate: paginationReducer,
    modal: modalReducer
})
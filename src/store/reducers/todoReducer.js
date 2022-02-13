import { todosActionTypes } from "../actions/todos-action";

const initialState = {
    todos: [],
    status: false,
    error: null
}

export const todoReducer = (state = initialState , action) => {
    switch (action.type) {
        case todosActionTypes.TODOS_REQUEST:
            return {
                ...state,
                status: true
            }
        case todosActionTypes.TODOS_REQUEST_RESOLVED:
            return {
                ...state,
                todos: action.payload,
                status: false
            }
        case todosActionTypes.TODOS_REQUEST_REJECTED:
            return {
                ...state,
                status: false,
                error: action.payload
            }
        case todosActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos , action.payload]
            }
        case todosActionTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(({ id }) => id !== action.payload)
            }
        case todosActionTypes.TOGGLE_TODO:
            const toggledTodo = state.todos.map(item => item.id === action.payload.id ? 
            {...action.payload , completed: !action.payload.completed} : item)
            return {
                ...state,
                todos: toggledTodo
            }
        case todosActionTypes.NEW_TODO_TITLE:
            const newTodo = state.todos.map(item => item.id === action.payload.id ? 
            {...item , title: action.payload.title} : item)
            return {
                ...state,
                todos: newTodo
            }
        default:
            return state;
    }
}
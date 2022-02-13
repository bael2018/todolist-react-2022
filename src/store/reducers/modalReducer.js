import { modalActionTypes } from "../actions/modal-action";

const initialState = {
    isEdit: false,
    isAddTodo: false,
    todoId: null
}

export const modalReducer = (state = initialState , action) => {
    switch (action.type) {
        case modalActionTypes.EDIT_TODO_ACTIVE:
            return {
                ...state,
                isEdit: !state.isEdit
            }
        case modalActionTypes.ADD_TODO_ACTIVE:
            return {
                ...state,
                isAddTodo: !state.isAddTodo
            }
        case modalActionTypes.TODO_ID:
            return {
                ...state,
                todoId: action.payload
            }
        default:
            return state;
    }
}
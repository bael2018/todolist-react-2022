export const modalActionTypes = {
    EDIT_TODO_ACTIVE: 'EDIT_TODO_ACTIVE',
    ADD_TODO_ACTIVE: 'ADD_TODO_ACTIVE',
    TODO_ID: 'TODO_ID',
}

export const rootActions = {
    editTodoActiveAction: payload => {
        return {
            type: modalActionTypes.EDIT_TODO_ACTIVE,
            payload
        }
    },
    addTodoActiveAction: () => {
        return {
            type: modalActionTypes.ADD_TODO_ACTIVE
        }
    },
    todoIdAction: payload => {
        return {
            type: modalActionTypes.TODO_ID,
            payload
        }
    }
}
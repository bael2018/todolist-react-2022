export const todosActionTypes = {
    TODOS_REQUEST: 'TODOS_REQUEST',
    TODOS_REQUEST_RESOLVED: 'TODOS_REQUEST_RESOLVED',
    TODOS_REQUEST_REJECTED: 'TODOS_REQUEST_REJECTED',
    TODOS_SAGA_HANDLER: 'TODOS_SAGA_HANDLER',
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    NEW_TODO_TITLE: 'NEW_TODO_TITLE',
}

export const todosActions = {
    todosAction: () => {
        return {
            type: todosActionTypes.TODOS_REQUEST
        }
    },
    todosResolvedAction: payload => {
        return {
            type: todosActionTypes.TODOS_REQUEST_RESOLVED,
            payload
        }
    },
    todosRejetedAction: payload => {
        return {
            type: todosActionTypes.TODOS_REQUEST_REJECTED,
            payload
        }
    },
    todosSagaAction: () => {
        return {
            type: todosActionTypes.TODOS_SAGA_HANDLER
        }
    },
    addTodoAction: payload => {
        return {
            type: todosActionTypes.ADD_TODO,
            payload
        }
    },
    deleteTodoAction: payload => {
        return {
            type: todosActionTypes.DELETE_TODO,
            payload
        }
    },
    toggleTodoAction: payload => {
        return {
            type: todosActionTypes.TOGGLE_TODO,
            payload
        }
    },
    todoTitleAction: payload => {
        return {
            type: todosActionTypes.NEW_TODO_TITLE,
            payload
        }
    }
}
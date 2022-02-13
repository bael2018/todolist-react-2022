export const paginationActionTypes = {
    SET_PREV: 'SET_PREV',
    SET_NEXT: 'SET_NEXT',
}

export const rootActions = {
    setPrevAction: () => {
        return {
            type: paginationActionTypes.SET_PREV
        }
    },
    setNextAction: () => {
        return {
            type: paginationActionTypes.SET_NEXT
        }
    }
}
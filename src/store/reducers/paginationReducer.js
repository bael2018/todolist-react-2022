import { limit } from "../../constants";
import { paginationActionTypes } from "../actions/pagination-action";

const initialState = {
    prev: 0,
    next: limit
}

export const paginationReducer = (state = initialState , action) => {
    switch (action.type) {
        case paginationActionTypes.SET_PREV:
            return {
                ...state,
                prev: state.prev - limit,
                next: state.next - limit
            }
        case paginationActionTypes.SET_NEXT:
            return {
                ...state,
                prev: state.prev + limit,
                next: state.next + limit
            }
        default:
            return state;
    }
}
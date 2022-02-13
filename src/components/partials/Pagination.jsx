import { rootActions } from "../../store/actions/pagination-action"
import cls from '../../scss/components/partials/pagination.module.scss'
import { useSelector , useDispatch } from "react-redux"
import { useState } from "react"
import { limit } from '../../constants'

const Pagination = () => {
    const { prev , next } = useSelector(state => state.paginate)
    const { todos } = useSelector(state => state.todo)
    const [pageCounter , setPageCounter] = useState(1)
    const dispatch = useDispatch()

    const prevBtnHander = () => {
        if(prev > 0){
            dispatch(rootActions.setPrevAction())
            setPageCounter(prev => prev - 1)
        }
    }

    const nextBtnHander = () => {
        if(next <= todos.length){
            dispatch(rootActions.setNextAction())
            setPageCounter(prev => prev + 1)
        }
    }

    return (
        <div className={cls.pagination}>
            <button 
                className={` ${prev === 0 && cls.pagination_disabled}`}
                onClick={prevBtnHander}
            >
                PREV
            </button>
            <span>Page {pageCounter}</span>
            <button 
                className={` ${todos?.length / limit <= pageCounter && cls.pagination_disabled}`}
                onClick={nextBtnHander}
            >
                NEXT
            </button>
        </div>
    )
}

export { Pagination }
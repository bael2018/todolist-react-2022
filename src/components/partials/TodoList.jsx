import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cls from '../../scss/components/partials/todolist.module.scss'
import { todosActions } from '../../store/actions/todos-action'
import { TodoItem } from '../elements/TodoItem'
import { Loader } from '../elements/ui/Loader'
import { EditModal } from './EditModal'
import { Pagination } from './Pagination'
import { RejectHanler } from './RejectHandler'
import { AddTodo } from '../partials/AddTodo'

const TodoList = () => {
    const { todos , error , status } = useSelector(state => state.todo)
    const { next , prev } = useSelector(state => state.paginate)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(todosActions.todosSagaAction())
    } , [])

    if(error){
        return <RejectHanler text={error}/>
    }else{
        return (
            <div className={cls.todoList}>
                <EditModal/>
                {
                    status ? <Loader/> : 
                    (
                        todos.length ? (
                            <div>   
                                <AddTodo/>
                                {
                                    todos.slice(prev , next).map(item => <TodoItem key={item.id} todo={item}/>)
                                }
                                <Pagination/>
                            </div>
                        ) : (   
                            <RejectHanler text={'No todos found !'} />
                        )
                    )
                }
            </div>  
        )
    }
}

export { TodoList }
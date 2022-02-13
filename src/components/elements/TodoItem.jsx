import cls from '../../scss/components/elements/todoitem.module.scss'
import { AiFillDelete , AiFillEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { todosActions } from '../../store/actions/todos-action'
import { rootActions } from '../../store/actions/modal-action'
import { RiToggleFill } from 'react-icons/ri'

const TodoItem = ({ todo }) => {
    const { id , completed , title } = todo
    const dispatch = useDispatch()

    const deleteTodoHandler = () => {
        const isDelete = window.confirm('Are you sure?')
        if(!isDelete) return
        dispatch(todosActions.deleteTodoAction(id))
    }

    const editTitleHandler = () => {
        dispatch(rootActions.editTodoActiveAction())
        dispatch(rootActions.todoIdAction(id))
    }

    const toggleTodoHandler = () => {
        dispatch(todosActions.toggleTodoAction(todo))
    }

    return (
        <div 
            className={`${cls.todo} ${completed && cls.todo_active}`}
        >
           <div>
                <p>{id}</p>
                <h4>{title}</h4>
           </div>
           <div>
               <span onClick={toggleTodoHandler}><RiToggleFill/></span>
               <span onClick={deleteTodoHandler}><AiFillDelete/></span>
               <span onClick={editTitleHandler}><AiFillEdit/></span>
           </div>
        </div>
    )
}

export { TodoItem }
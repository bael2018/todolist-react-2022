import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import cls from '../../scss/components/partials/addtodo.module.scss'
import { todosActions } from '../../store/actions/todos-action'

const AddTodo = () => {
    const { todos } = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const inputFiller = useInput('')

    const addBtnHandler = () => {
        if(inputFiller.getter().value.trim().length){
            const body = {
                userId: 1,
                id: todos.length + 1,
                title: inputFiller.getter().value,
                completed: false
            }
            dispatch(todosActions.addTodoAction(body))
            inputFiller.clearValue()
        }else{
            alert("Fill the input")
        }
    }

    return (
        <div className={cls.add}>
            <input 
                type="text" 
                placeholder='New todo'
                {...inputFiller.getter()}
            />
            <button onClick={addBtnHandler}>ADD</button>
        </div>
    )
}

export { AddTodo }
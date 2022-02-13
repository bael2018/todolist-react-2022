import cls from '../../scss/components/partials/editmodal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IoClose } from 'react-icons/io5'
import { rootActions } from '../../store/actions/modal-action'
import { useInput } from '../../hooks/useInput'
import { todosActions } from '../../store/actions/todos-action'

const EditModal = () => {
    const { isEdit , todoId } = useSelector(state => state.modal)
    const editFiller = useInput('')
    const dispatch = useDispatch()

    const editCloseHandler = () => {
        dispatch(rootActions.editTodoActiveAction())
    }
    
    const editBtnHandler = () => {
        if(editFiller.getter().value.trim().length){
            dispatch(todosActions.todoTitleAction({
                id: todoId,
                title: editFiller.getter().value
            }))
            editFiller.clearValue()
            editCloseHandler()
        }else{
            alert('Fill the input !')
        }
    }   

    return (
        <div className={`${cls.edit} ${isEdit && cls.edit_active}`}>
            <div className={cls.edit__wrapper}>
                <span 
                    onClick={editCloseHandler}
                    className={cls.edit__wrapper_closer}
                ><IoClose/></span>
                <h3>Todo title</h3>
                <input 
                    {...editFiller.getter()}
                    type="text" 
                    placeholder='New title...'
                />
                <button onClick={editBtnHandler}>SUBMIT</button>
            </div>
        </div>
    )
}

export { EditModal }
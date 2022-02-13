import { useNavigate } from 'react-router-dom'
import cls from '../scss/error.module.scss'

const Error = () => {
    const navigate = useNavigate()

    const goBackHander = () => {
        navigate('/')
    }

    return (
        <div className={cls.error}>
            <div>
                <h3>Page not found !</h3>
                Go back <span onClick={goBackHander}>Main</span>
            </div>
        </div>
    )
}

export { Error }
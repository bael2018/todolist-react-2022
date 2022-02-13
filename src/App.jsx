import { AppLayout } from './components/layouts/AppLayout'
import { Route, Routes } from 'react-router-dom'
import cls from './scss/style.module.scss'
import { Error } from './pages/Error'
import { Main } from './pages/Main'
import { Todos } from './pages/Todos'

const App = () => {
    return (
        <div className={cls.root}>
            <Routes>
                <Route path='/' element={<AppLayout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='todos' element={<Todos/>}/>
                    <Route path='*' element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export { App }
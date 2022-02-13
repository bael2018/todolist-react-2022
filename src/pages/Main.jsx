import { Description } from "../components/elements/Description"
import { Logo } from "../components/elements/ui/Logo"
import cls from '../scss/main.module.scss'

const Main = () => {
    return (
        <div className={cls.main}>
            <Logo/>
            <Description/>
        </div>
    )
}

export { Main }
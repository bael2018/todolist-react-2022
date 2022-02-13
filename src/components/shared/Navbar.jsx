import cls from '../../scss/components/shared/navbar.module.scss'
import { CustomLink } from '../elements/CustomLink'

const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <CustomLink to={'/'}>
                Main
            </CustomLink>
            <CustomLink to={'/todos'}>
                Todos
            </CustomLink>
        </div>
    )
}

export { Navbar }
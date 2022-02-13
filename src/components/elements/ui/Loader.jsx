import cls from '../../../scss/components/elements/loader.module.scss'

const Loader = () => {
    return (
        <div className={cls.load}><div className={cls.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    )
}

export { Loader }
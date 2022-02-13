import cls from '../../scss/components/partials/rejecthandler.module.scss'

const RejectHanler = ({ text }) => {
    return (
        <div className={cls.reject}>
            {text}
        </div>
    )
}

export { RejectHanler }
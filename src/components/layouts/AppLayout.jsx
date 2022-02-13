import { Outlet } from "react-router-dom"
import { Navbar } from "../shared/Navbar"

const AppLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export { AppLayout }
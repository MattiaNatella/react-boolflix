import MainNav from "../componets/MainNav"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNav></MainNav>
            </header>
            <main>
                <Outlet />
            </main>
        </>

    )
}

export default DefaultLayout
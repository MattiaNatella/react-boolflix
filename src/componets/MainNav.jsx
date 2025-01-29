import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

const MainNav = () => {

    const { fetchData, userTitle, handleInput } = useGlobalContext()

    const handleSubmit = (e) => {

        console.log(e.key)
        if (e.key == 'Enter') {
            fetchData()
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src="../../public/img/image.png" alt="" /></a>

                    <input className="form-control w-30 me-2" type="search" placeholder="Cerca per titolo" aria-label="Search"
                        value={userTitle}
                        onChange={handleInput}
                        onKeyUp={handleSubmit} />

                    <button
                        className="btn">
                        <i
                            style={{ color: "#df1677" }}
                            className="fa-brands fa-searchengin fa-2xl"></i>
                    </button>

                </div>
            </nav >
        </>
    )
}

export default MainNav
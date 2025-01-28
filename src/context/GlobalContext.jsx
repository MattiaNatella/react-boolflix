import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const apiKey = '7d5669291d98760116a5799324f6fb0b'
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`

    const [movieList, setMovieList] = useState([])
    const [userTitle, setUserTitle] = useState('')


    const fetchData = () => {
        console.log(apiUrl + userTitle)
        axios.get(apiUrl + userTitle)
            .then(res => {
                setMovieList(res.data.results)
            })
    }

    const handleInput = (e) => {

        setUserTitle(e.target.value)
        console.log(userTitle)
    }

    const value = {
        fetchData,
        handleInput,
        userTitle,
        setUserTitle,
        movieList,
        setMovieList

    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }
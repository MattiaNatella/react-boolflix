import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const apiKey = '7d5669291d98760116a5799324f6fb0b'
    const apiUrlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`
    const apiUrlTvSeries = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=`

    const [movieList, setMovieList] = useState([])
    const [tvSeriesList, setTvSeriesList] = useState([])
    const [userTitle, setUserTitle] = useState('')



    const fetchData = () => {
        console.log(apiUrlMovies + userTitle)
        axios.get(apiUrlMovies + userTitle)
            .then(res => {
                setMovieList(res.data.results)
            })
        axios.get(apiUrlTvSeries + userTitle)
            .then(res => {
                console.log(res.data.results)
                setTvSeriesList(res.data.results)
            })
    }

    const handleInput = (e) => {

        setUserTitle(e.target.value)
    }

    function selectFlag(language) {
        if (language == 'en') {
            return 'https://flagsapi.com/GB/shiny/64.png'
        }
        if (language == 'ja') {
            return 'https://flagsapi.com/JP/shiny/64.png'
        }
        if (language == 'zh') {
            return 'https://flagsapi.com/CN/shiny/64.png'
        }
        if (language == 'da') {
            return 'https://flagsapi.com/DK/shiny/64.png'
        }
        if (language == 'ko') {
            return 'https://flagsapi.com/KR/shiny/64.png'
        }
        if (language == 'fa') {
            return 'https://flagsapi.com/IR/shiny/64.png'
        }
        if (language == 'hi') {
            return 'https://flagsapi.com/IN/shiny/64.png'
        }
    }

    const value = {
        fetchData,
        handleInput,
        userTitle,
        setUserTitle,
        movieList,
        setMovieList,
        tvSeriesList,
        setTvSeriesList,
        selectFlag
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }
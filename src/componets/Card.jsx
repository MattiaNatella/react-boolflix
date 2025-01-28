import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const Card = ({ movie, tv }) => {

    const { selectFlag } = useGlobalContext()

    function getLanguageFlag() {
        // (selectFlag(movie?.original_language) || `https://flagsapi.com/${movie?.original_language.toUpperCase()}/shiny/64.png`) || (selectFlag(tv?.original_language) || `https://flagsapi.com/${tv?.original_language.toUpperCase()}/shiny/64.png`)

        return movie ?
            (selectFlag(movie?.original_language) || `https://flagsapi.com/${movie?.original_language.toUpperCase()}/shiny/64.png`) :
            (selectFlag(tv?.original_language) || `https://flagsapi.com/${tv?.original_language.toUpperCase()}/shiny/64.png`)

    }

    function getPoster() {
        return movie ? `https://image.tmdb.org/t/p/w342/${movie?.poster_path}` : `https://image.tmdb.org/t/p/w342/${tv?.poster_path}`
    }

    return (
        <>
            <div className="card col-4">
                <div className="card-header">
                    {movie?.title || tv?.original_name}
                </div>
                <img src={getPoster()} alt="poster image" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{movie?.original_title || tv?.original_name}</li>
                    <li className="list-group-item">
                        <img src={getLanguageFlag()} alt={movie?.original_language || tv?.original_language} /></li>
                    <li className="list-group-item">{movie?.vote_average || tv?.vote_average}</li>
                </ul>
            </div>
        </>
    )
}

export default Card
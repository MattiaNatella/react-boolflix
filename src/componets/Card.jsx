
import { useGlobalContext } from "../context/GlobalContext"
import { useState } from "react"

const Card = ({ movie, tv }) => {

    const { selectFlag } = useGlobalContext()
    const [hidden, setHidden] = useState(true)

    function getLanguageFlag() {

        return movie ?
            (selectFlag(movie?.original_language) || `https://flagsapi.com/${movie?.original_language.toUpperCase()}/shiny/64.png`) :
            (selectFlag(tv?.original_language) || `https://flagsapi.com/${tv?.original_language.toUpperCase()}/shiny/64.png`)

    }

    function getPoster() {
        return movie ? `https://image.tmdb.org/t/p/w342/${movie?.poster_path}` : `https://image.tmdb.org/t/p/w342/${tv?.poster_path}`
    }

    function getStars(vote) {
        let fullStar = <i className="fa-solid fa-star fa-spin fa-spin-reverse" ></i >
        const emptyStar = <i class="fa-regular fa-star"></i>
        let starsRating = []
        let ceilVote = Math.ceil(vote / 2)

        console.log(ceilVote)
        for (let i = 1; i <= 5; i++) {
            if (starsRating.length < ceilVote) {
                starsRating.push(fullStar)
            } else {
                starsRating.push(emptyStar)
            }
        }
        return starsRating


    }

    return (
        <>
            <div
                className="card col-4 p-0"
                onMouseEnter={() => setHidden(false)}
                onMouseLeave={() => setHidden(true)}>

                {hidden
                    ? (<img id="poster" src={getPoster()} alt="poster image" />)
                    : (
                        <>
                            <div className="card-header">
                                {movie?.title || tv?.original_name}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{movie?.original_title || tv?.original_name}</li>
                                <li className="list-group-item">
                                    <img src={getLanguageFlag()} alt={movie?.original_language || tv?.original_language} /></li>
                                <li className="list-group-item">{getStars(movie?.vote_average || tv?.vote_average)}</li>
                            </ul>
                        </>
                    )}
            </div>
        </>
    )
}

export default Card
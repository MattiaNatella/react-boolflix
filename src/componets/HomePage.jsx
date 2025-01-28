import Card from "./Card"
import { useGlobalContext } from "../context/GlobalContext"

const HomePage = () => {

    const { movieList, tvSeriesList } = useGlobalContext();

    return (
        <div className="container py-3">

            {/* MOVIES*/}

            {movieList.length > 0 ? <h2>Movies</h2> : <h2>HomePage</h2>}
            <div className="row d-flex my-3">
                {movieList.length > 0 && (movieList.map((movie, index) =>
                    <Card key={index} movie={movie} />
                ))
                }
            </div>

            {/* TV SERIES*/}

            {tvSeriesList.length > 0 && <h2>TV Series</h2>}
            <div className="row d-flex my-3">
                {tvSeriesList.length > 0 && (tvSeriesList.map((tv, index) =>
                    <Card key={index} tv={tv} />
                ))
                }
            </div>
        </div>
    )
}

export default HomePage
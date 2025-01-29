import Card from "./Card"
import { useGlobalContext } from "../context/GlobalContext"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';

const HomePage = () => {

    const { movieList, tvSeriesList } = useGlobalContext();

    return (
        <>

            <div>


            </div>

            <div className="container py-3">

                {/* MOVIES*/}
                {movieList.length > 0 ? <h2>Movies</h2> : <h2>HomePage</h2>}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>


                    <div className="row d-flex my-3">
                        {movieList.length > 0 && (movieList.map((movie, index) =>
                            <SwiperSlide>
                                <Card key={index} movie={movie} />
                            </SwiperSlide>
                        ))
                        }

                    </div>

                </Swiper>
                {/* TV SERIES*/}

                {tvSeriesList.length > 0 && <h2>TV Series</h2>}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>

                    <div className="row d-flex my-3">
                        {tvSeriesList.length > 0 && (tvSeriesList.map((tv, index) =>
                            <SwiperSlide>
                                <Card key={index} tv={tv} />
                            </SwiperSlide>

                        ))
                        }
                    </div>
                </Swiper>
            </div>
        </>
    )
}


export default HomePage
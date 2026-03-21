import React, {useState, useEffect} from "react";
import axios from "axios";
function Banner({pageNumber}){
    const [bannerImage, setBannerImage]=useState("");
    const [title, setTitle]=useState("Placeholder Title");
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=d88d09c8c262de5ae8ca08eeff6e4f80&language=en-US&page=${pageNumber}`)
        .then((response)=>{
            console.log("Films",response.data.results);
            const firstMovie=response.data.results[0];
            const firstMovieTitle=firstMovie.title;
            const firstMoviePoster=firstMovie["backdrop_path"];
            setTitle(firstMovieTitle);
            setBannerImage(`https://image.tmdb.org/t/p/original/${firstMoviePoster}`);
        });
    },[pageNumber])
    return (
        <div className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
        style={{
            backgroundImage:`url(${bannerImage})`,
        }}>
        <div className="text-white w-full text-center text-2xl">{title}</div>
        </div>
    )
}
export default Banner;
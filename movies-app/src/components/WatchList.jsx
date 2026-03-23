import { useEffect, useState } from "react";
import genreids from "../constants/genreids";
function WatchList(){
    const [watchlist,setWatchList]=useState([]);
    useEffect(()=>{
        const moviesFromStorage=localStorage.getItem('movies');
        if(moviesFromStorage){
            setWatchList(JSON.parse(moviesFromStorage));
        }
    },[]);
    const genres=(genre_id)=>{
        return genreids[genre_id];
    }
    const handleAscendingRatings=()=>{
        let sortedAscencending=watchlist.sort((movieObjA,movieObjB)=>{
            return movieObjA.vote_average-movieObjB.vote_average;
        });
        setWatchList([...sortedAscencending]);
    }
    const handleDescendingRatings=()=>{
        let sortedDescencending=watchlist.sort((movieObjA,movieObjB)=>{
            return movieObjB.vote_average-movieObjA.vote_average;
        });
        setWatchList([...sortedDescencending]);
    }
    const handleAscendingPopularity=()=>{
        let sortedAscencending=watchlist.sort((movieObjA,movieObjB)=>{
            return movieObjA.popularity-movieObjB.popularity;
        });
        setWatchList([...sortedAscencending]);
    }
    const handleDescendingPopularity=()=>{
        let sortedDescencending=watchlist.sort((movieObjA,movieObjB)=>{
            return movieObjB.popularity-movieObjA.popularity;
        });
        setWatchList([...sortedDescencending]);
    }
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5"> 
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
        <tr className="bg-gray-50">
        <th className="px-6 py-4 font-medium text-gray-900">Name</th>
        <th>
        <div className="flex">
        <div>
        <i className="fa-solid fa-arrow-up hover:cursor-pointer mx-1" onClick={handleAscendingRatings}></i>
        {""}Ratings{""}
        <i className="fa-solid fa-arrow-down hover:cursor-pointer mx-1" onClick={handleDescendingRatings}></i>
        </div>
        </div>
        </th>
         <th>
        <div className="flex">
        <div>
        <i className="fa-solid fa-arrow-up hover:cursor-pointer mx-1" onClick={handleAscendingPopularity}></i>
        {""}Popularity{""}
        <i className="fa-solid fa-arrow-down hover:cursor-pointer mx-1" onClick={handleDescendingPopularity}></i>
        </div>
        </div>
        </th>
         <th>
        <div className="flex">
        <div>Genre</div>
        </div>
        </th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {watchlist.map((movie)=>(
        <tr className="hover:bg-gray-50" key={movie.id}>
        <td className="flex items-center px-6 py-4 font-normal text-gray-900">
        <img className="h-[6rem] w-[10rem] object-fit object-cover" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt=""></img>
        <div className="font-medium px-8 text-gray-700 text-sm">{movie.title}</div>
        </td>
        <td className="p1-6 py-4">{movie.vote_average}</td>
        <td className="p1-6 py-4">{movie.popularity}</td>
        <td className="p1-2 py-4">{genres(movie.genre_ids[0])}</td>
        </tr>
        ))}
        </tbody>
        </table>
        </div>
    )
}
export default WatchList;
import { useEffect, useState,useContext } from "react";
import genreids from "../constants/genreids";
import {WatchListContext} from "../Context/WatchListContext";
function WatchList(){
    const {watchlist,setWatchList}=useContext(WatchListContext);
    const [search, setSearch]=useState("");
    const [genrelist,setGenreList]=useState(["All Genres","Thriller","Horror"]);
    const [currGenre,setCurrGenre]=useState("All Genres");
    const handleSearch=(event)=>{
        setSearch(event.target.value);
    }
    useEffect(()=>{
        let temp=watchlist.map((movie)=>{
            return genreids[movie.genre_ids[0]];
        });
        temp=new Set(temp);
        setGenreList(["All Genres",...temp]);
    },[watchlist]);
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
    const handleFilter=(genre)=>{
        setCurrGenre(genre);
    }
    return (
        <div>
        <div className="flex justify-center flex-wrap m-4">
        {genrelist.map((genre)=>{
            const isActive=currGenre===genre;
            const baseStyles="flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4 m-2";
            const bgcolor=isActive ? "bg-blue-400":"bg-gray-400/50";
            return <div className={`${baseStyles} ${bgcolor}`} onClick={()=>handleFilter(genre)}>{genre}</div>
        })}
        </div>
        <div className="flex justify-center my-10">
        <input 
            placeholder="Search Movies"
            className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border 
            border-gray-300" 
            type="text"
            onChange={handleSearch}
            value={search}></input>
        </div>
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
        {watchlist
            .filter((movie)=>{
                if(currGenre=="All Genres"){
                    return true;
                }else{
                    return genreids[movie.genre_ids[0]]==currGenre;
                }
            })
            .filter((movie)=>{
                return movie.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((movie)=>(
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
        </div>
    )
}
export default WatchList;
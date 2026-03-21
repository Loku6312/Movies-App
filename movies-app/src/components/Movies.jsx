import {useState, useEffect} from "react";
import Pagination from "./Pagination"
import MovieCard from"./MovieCard"
import axios from "axios";
import Banner from "./Banner";
function Movies(){
    const [watchlist,setWatchList]=useState([]);
    const [movies,setMovies]=useState([]);
    const [pagNo,setPageNo]=useState(1);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=d88d09c8c262de5ae8ca08eeff6e4f80&language=en-US&page=${pagNo}`)
        .then(function(res){
            setMovies(res.data.results);
        })
    },[pagNo])
    const handleNext=()=>{
        setPageNo(pagNo+1);
    }
    const handlePrevious=()=>{
        if(pagNo==1){
            setPageNo(pagNo);
        }else{
            setPageNo(pagNo-1);
        }
    }
    const addToWatchList=(movieObj)=>{
        let updatedWatchList=[...watchlist,movieObj];
        setWatchList(updatedWatchList);
    }
    const removeToWatchList=(movieObj)=>{
        let updatedWatchList=watchlist.filter((movie)=>{
            return movieObj.id!=movie.id;
        });
        setWatchList(updatedWatchList);
    }
    return (
        <div>
        <Banner pageNumber={pagNo}/>
        <div className="text-center text-2xl font-bold m-5">
        <h1>Trending Movies</h1>
        </div>
        <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj)=><MovieCard movieObj={movieObj} addToWatchList={addToWatchList} watchlist={watchlist} removeToWatchList={removeToWatchList}/>)}
        </div>
        <Pagination pageNumber={pagNo} nextPageFn={handleNext} previousPageFn={handlePrevious}/>
        </div>
    )
}
export default Movies
import {useState} from "react";
import Pagination from "./Pagination"
import MovieCard from"./MovieCard"
function Movies(){
    const [movies,setMovies]=useState([
        {
            url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title:"Movie 1"
        },
        {
            url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title:"Movie 2"
        },
        {
            url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title:"Movie 3"
        },
        {
            url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title:"Movie 4"
        },{
            url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title:"Movie 5"
        }
    ]);
    const [pagNo,setPageNo]=useState(1);
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
    return (
        <div>
        <div className="text-center text-2xl font-bold m-5">
        <h1>Trending Movies</h1>
        </div>
        <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj)=><MovieCard movieObj={movieObj} />)}
        </div>
        <Pagination pageNumber={pagNo} nextPageFn={handleNext} previousPageFn={handlePrevious}/>
        </div>
    )
}
export default Movies
function MovieCard({movieObj, addToWatchList, watchlist,removeToWatchList}){
    const doesContain=(movieObj)=>{
        for(let i=0;i<watchlist.length;i++){
            if(watchlist[i].id==movieObj.id){
                return true;
            }
        }
        return false;
    }
    return (
        <div className="h-[40vh] w-[200px] bg-center bg-cover justify-between rounded-xl hover:scale-110 duration 300 hover:cursor-pointer flex flex-col" 
                style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`,

                }}
                >
                {
                    doesContain(movieObj) ? (<div onClick={()=>removeToWatchList(movieObj)}  className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">❌</div>):
                    (<div onClick={()=>addToWatchList(movieObj)}  className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">😍</div>
                )
                }
                
                <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">{movieObj.title}</div>
        </div>
    )
}
export default MovieCard;
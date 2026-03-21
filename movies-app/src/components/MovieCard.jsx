function MovieCard({movieObj}){
    return (
        <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration 300 hover:cursor-pointer flex flex-col" 
                style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`,

                }}
                >
                <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">{movieObj.title}</div>
        </div>
    )
}
export default MovieCard;
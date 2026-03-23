import { createContext,useState,useEffect} from "react";
export const WatchListContext=createContext();
export default function WatchListContextWrapper({children}){
    const [watchlist,setWatchList]=useState([]);
    const addToWatchList=(movieObj)=>{
        let updatedWatchList=[...watchlist,movieObj];
        setWatchList(updatedWatchList);
        localStorage.setItem('movies',JSON.stringify(updatedWatchList));
    };
    const removeToWatchList=(movieObj)=>{
        let updatedWatchList=watchlist.filter((movie)=>{
            return movieObj.id!=movie.id;
        });
        setWatchList(updatedWatchList);
        localStorage.setItem('movies',JSON.stringify(updatedWatchList));
    };
    useEffect(()=>{
            const moviesFromStorage=localStorage.getItem('movies');
            if(moviesFromStorage){
                setWatchList(JSON.parse(moviesFromStorage));
            }
    },[]);
    return <WatchListContext.Provider
        value={{addToWatchList,removeToWatchList,watchlist,setWatchList}}
        >{children} {" "}
    </WatchListContext.Provider>
}
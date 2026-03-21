import {Link} from "react-router-dom";
import LOGO from "../assets/Logo.png";
function NavBar(){
    return (
        <div className="flex space-x-8 items-center pl-3 py-4">
        <Link to="/">
        <img className="w-[50px]" src={LOGO}/>
        </Link>
        <div className="text-blue-500 text-3xl font-bold space-x-8">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">WatchList</Link>
        </div>
        </div>

    )
}
export default NavBar
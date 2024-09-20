import AddToFavourites from "../../Favourites_Function/progress";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({actived, setActived, onNavigate}){

    const location = useLocation()
    const navigate = useNavigate()
    
    return (
        <div className="nav-parent flex flex-col justify-center items-center gap-3 pb-5">
            <ul className="flex gap-[2px] font-bold">
                <Link to="/topAnnouncements"><li className={`${location.pathname === "/topAnnouncements" ? "border-b-2 border-solid border-b-blue-400 " : "bg-gray-300"} px-3 py-2 cursor-pointer hover:bg-blue-200`}>Թոփ հայտարարություններ</li></Link>
                <Link to="/urgentSale"><li className={`${location.pathname === "/urgentSale" ? "border-b-2 border-solid border-b-blue-400 " : "bg-gray-300"} px-3 py-2 cursor-pointer hover:bg-blue-200`}>Շտապ վաճառք</li></Link>
                <Link to="/offersFromDealers"><li className={`${location.pathname === "/offersFromDealers" ? "border-b-2 border-solid border-b-blue-400 " : "bg-gray-300"} px-3 py-2 cursor-pointer hover:bg-blue-200`}>Առաջարկներ դիլերներից</li></Link>
            </ul>
            <div className="flex gap-4">
                <button className="bg-blue-700 text-white px-7 text-center rounded-md py-1">Բոլոր առաջարկները</button>
                    <button type="submit" onClick={() => navigate("/login")} className="border border-blue-600 border-solid px-3">Log in </button>
                <AddToFavourites  actived={actived} setActived={setActived} />
            </div>
        </div>
    )
}
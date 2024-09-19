import AddToFavourites from "../../Favourites_Function/progress";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({actived, setActived}){

    const navigate = useNavigate()
    return (
        <div className="nav-parent flex flex-col justify-center items-center gap-3 pb-5">
            <ul className="flex gap-[2px] font-bold">
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Մարդատար</a></li>
                <Link to="/bernatar"><li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200">Բեռնատար</li></Link>
                <Link to="/bernatar"><li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200">Մոտոտեխնիկա</li></Link>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Հատուկ տեխնիկա</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Ավտոբուս</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Կցասայլ</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Ջրային տեխնիկա</a></li>
            </ul>
            <div className="flex gap-4">
                <button className="bg-blue-700 text-white px-7 text-center rounded-md py-1">Բոլոր առաջարկները</button>
                    <button type="submit" onClick={() => navigate("/login")}>Log in </button>
                <AddToFavourites  actived={actived} setActived={setActived} />
            </div>
        </div>
    )
}
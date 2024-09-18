import AddToFavourites from "../../Favourites_Function/progress";

export default function Navbar({actived, setActived}){
    return (
        <div className="nav-parent flex flex-col justify-center items-center gap-3 pb-5">
            <ul className="flex gap-[2px] font-bold">
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Մարդատար</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Բեռնատար</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Մոտոտեխնիկա</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Հատուկ տեխնիկա</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Ավտոբուս</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Կցասայլ</a></li>
                <li className="bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-200"><a href="">Ջրային տեխնիկա</a></li>
            </ul>
            <div className="flex gap-4">
                <button className="bg-blue-700 text-white px-7 text-center rounded-md py-1">Բոլոր առաջարկները</button>
                <AddToFavourites  actived={actived} setActived={setActived} />
            </div>
        </div>
    )
}
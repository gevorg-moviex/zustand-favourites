import categories from "../../../data";

export default function OffersFromDealers( {handleBookmarked, isActive} ){
    return (
        <div className="text-center mt-10">
            <h1 className="font-bold text-2xl">Առաջարկներ դիլերներից</h1>
            <div className="grid grid-cols-custom grid-rows-3 justify-center gap-y-5 gap-x-8 p-5">
                {categories.offersFromDealers.map((item) => (
                    <div key={item.id} className="flex flex-col justify-between items-center gap-2 shadow-customShadow rounded-xl p-3 w-[220px] cursor-pointer">
                        <div className="relative">
                            <img src={item.imageUrl} alt="" className="min-w-52 h-40 object-cover"/>
                            <i className={`${isActive.includes(item.id) ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart text-white"}  absolute top-1 right-3 text-xl p-1 cursor-pointer hover:text-red-600`} onClick={() => handleBookmarked(item)}></i>
                        </div>
                        <div className="w-full text-left">
                            <span className="text-[#329eeb]">{item.title}</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>{item.date}</span>
                            <span className="text-[#ff5252]">{"\u20ac" + item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
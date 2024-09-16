import categories from "../../../data";

export default function UrgentSale(){
    return (
        <div className="text-center mt-10">
            <h1 className="font-bold text-2xl">Շտապ վաճառք</h1>
            <div className="grid grid-cols-custom grid-rows-3 justify-center gap-y-5 gap-x-8 p-5">
                {categories.urgentSale.map((item) => (
                    <div key={item.id} className="flex flex-col justify-between items-center gap-2 border border-gray-400 border-solid p-3 w-[220px] cursor-pointer">
                        <div className="relative">
                            <img src={item.imageUrl} alt="" className="min-w-52 h-40 border-red-700 border-4 border-solid object-cover"/>
                            <i className="fa-regular fa-heart absolute top-1 right-3 text-white text-xl p-1 cursor-pointer hover:text-red-600"></i>
                        </div>
                        <div className="w-full text-left">
                            <span className="text-[#329eeb]">{item.title}</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>{item.date}</span>
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
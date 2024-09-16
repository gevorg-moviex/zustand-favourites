import categories from "../../../data";
import { useCallback, useState } from "react";
import useBookmarkStore from "../../store/useBookmarkStore";

export default function TopAnnouncements(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    const {bookmarks, addBookmark} = useBookmarkStore();

    const handleBookmak = useCallback((item) => {
        addBookmark(item)
    })
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl">Թոփ հայտարարություններ</h1>
            <div className="grid grid-cols-custom grid-rows-3 justify-center gap-y-5 gap-x-8 p-5">
                {categories.topAnnouncements.map((item) => (
                    <div key={item.id} className="flex flex-col justify-between items-center gap-2 border border-gray-400 border-solid p-3 w-[220px] cursor-pointer">
                        <div className="relative">
                            <img src={item.imageUrl} alt="" className="min-w-52 h-40"/>
                            <i className="fa-regular fa-heart absolute top-1 right-3 text-white text-xl p-1 cursor-pointer hover:text-red-600" onClick={() => handleBookmak(item)}></i>
                        </div>
                        <div className="w-full text-left">
                            <span className="text-[#039be5]">{item.title}</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>{item.date}</span>
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full text-center mt-3 cursor-pointer'>
        <i className="fa-solid fa-bookmark" onClick={() => setIsModalOpen(true)}></i>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center overflow-y-scroll">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Bookmarked Items</h2>
            {bookmarks.length === 0 ? (
              <p>No items bookmarked.</p>
            ) : (
              <ul className="flex flex-col gap-4 justify-center">
                {bookmarks.map(item => (
                  <li key={item.id} className="border-b py-2 flex gap-3 items-center">
                    <img src={item.imageUrl} alt={item.title} className="w-[300px] h-[200px] object-cover"/>
                    <div className="text-left">
                      <h3 className="font-bold">{item.title}</h3>
                      <p>{item.date} - {item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
        </div>
    )
}
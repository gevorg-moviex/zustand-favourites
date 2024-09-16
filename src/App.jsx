import { useState } from 'react'
import './App.css'
import TopAnnouncements from './Components/Top_Announcements/top'
import UrgentSale from './Components/Urgent_Sale/urgent'
import OffersFromDealers from './Components/Offers_From_Dealers/dealers'
import useBookmarkStore from './store/useBookmarkStore'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const {bookmarks, addBookmark} = useBookmarkStore();

  const handleBookmak = (item) => {
    addBookmark(item)
  }

  return (
    <>
      {/* <div className='w-full text-center mt-3 cursor-pointer'>
        <i className="fa-solid fa-bookmark" onClick={() => setIsModalOpen(true)}></i>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Bookmarked Items</h2>
            {bookmarks.length === 0 ? (
              <p>No items bookmarked.</p>
            ) : (
              <ul>
                {bookmarks.map(item => (
                  <li key={item.id} className="border-b py-2">
                    <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover"/>
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
      )} */}
      <TopAnnouncements />
      <UrgentSale />
      <OffersFromDealers />
    </>
  )
}

export default App

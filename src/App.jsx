import { act, useState } from 'react'
import './App.css'
import TopAnnouncements from './Components/Top_Announcements/top'
import UrgentSale from './Components/Urgent_Sale/urgent'
import OffersFromDealers from './Components/Offers_From_Dealers/dealers'
import useBookmarkStore from './store/useBookmarkStore'
import Navbar from './Components/Navbar/navbar'

function App() {
  const {removeBookmark, addBookmark} = useBookmarkStore();
  const [active, setActive] = useState([])

  const handleBookmark = (item) => {
    if (active.includes(item.id)){
      setActive(active.filter(id => id !== item.id))
      removeBookmark(item.id)
    } else {
      addBookmark(item)
      setActive([...active, item.id])  
    }
  }

  return (
    <>
      <Navbar actived={active} setActived={setActive}/>
      <TopAnnouncements handleBookmarked={handleBookmark} isActive={active} />
      <UrgentSale handleBookmarked={handleBookmark} isActive={active} />
      <OffersFromDealers handleBookmarked={handleBookmark} isActive={active} />
    </>
  )
}

export default App

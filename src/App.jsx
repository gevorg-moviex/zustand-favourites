import { act, useState } from 'react'
import './App.css'
import useBookmarkStore from './store/useBookmarkStore'
import Login from './Pages/login'
import Register from './Pages/register'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Layout from './Pages/layout'
import TopAnnouncements from './Components/Top_Announcements/top'
import UrgentSale from './Components/Urgent_Sale/urgent'
import OffersFromDealers from './Components/Offers_From_Dealers/dealers'
import { useLocation } from 'react-router-dom'

function App() {
  const {removeBookmark, addBookmark} = useBookmarkStore();
  const [active, setActive] = useState([])
  const { pathname } = useLocation();
  
  const isAuthPage = pathname === '/login' || pathname === '/register';

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
      <div className={`min-h-screen ${isAuthPage ? 'bg-[#213243]' : 'bg-white'} transition-all duration-[0.9s]`}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/topAnnouncements" element={<Layout actived1={active} setActived1={setActive} />}>
            <Route index element={<TopAnnouncements handleBookmarked={handleBookmark} isActive={active} />} /> 
          </Route>
          <Route path="/urgentSale" element={<Layout actived1={active} setActived1={setActive} />}>
            <Route path='/urgentSale' element={<UrgentSale handleBookmarked={handleBookmark} isActive={active} />} /> 
          </Route>
          <Route path="/offersFromDealers" element={<Layout actived1={active} setActived1={setActive} />}>
            <Route path='/offersFromDealers' element={<OffersFromDealers handleBookmarked={handleBookmark} isActive={active} />} /> 
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App

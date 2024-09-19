import { act, useState } from 'react'
import './App.css'
import useBookmarkStore from './store/useBookmarkStore'
import Login from './Pages/login'
import Register from './Pages/register'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Layout from './Pages/layout'
import TopAnnouncements from './Components/Top_Announcements/top'
import Some from './Components/ss'

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
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mardatar" element={<Layout actived1={active} setActived1={setActive} />}>
                <Route index element={<TopAnnouncements handleBookmarked={handleBookmark} isActive={active} />} /> {/* Renders TopAnnouncements at /mardatar */}
            </Route>
            <Route path="/bernatar" element={<Some />} />
        </Routes>

      {/* <Navbar actived={active} setActived={setActive}/>
      <TopAnnouncements handleBookmarked={handleBookmark} isActive={active} />
      <UrgentSale handleBookmarked={handleBookmark} isActive={active} />
      <OffersFromDealers handleBookmarked={handleBookmark} isActive={active} /> */}
    </>
  )
}

export default App

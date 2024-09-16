import { useState } from 'react'
import './App.css'
import TopAnnouncements from './Components/Top_Announcements/top'
import UrgentSale from './Components/Urgent_Sale/urgent'
import OffersFromDealers from './Components/Offers_From_Dealers/dealers'
import useBookmarkStore from './store/useBookmarkStore'
import AddToFavourites from './Favourites_Function/progress'

function App() {
  const {bookmarks, addBookmark} = useBookmarkStore();

  const handleBookmark = (item) => {
    addBookmark(item)
  }

  return (
    <>
      <AddToFavourites />
      <TopAnnouncements handleBookmarked={handleBookmark} />
      <UrgentSale handleBookmarked={handleBookmark} />
      <OffersFromDealers handleBookmarked={handleBookmark} />
    </>
  )
}

export default App

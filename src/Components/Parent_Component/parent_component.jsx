import React from 'react';
import AddToFavourites from '../../Favourites_Function/progress';
import TopAnnouncements from '../../components/TopAnnouncements';

export default function ParentComponent() {
    const handleBookmark = useCallback((item) => {
        addBookmark(item); addb
    }, [addBookmark]);

    return (
        <div>
            <AddToFavourites onBookmark={handleBookmark} />
            <TopAnnouncements handleBookmark={handleBookmark} />
        </div>
    );
}

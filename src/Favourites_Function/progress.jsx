import React, { useState, useCallback } from 'react';
import useBookmarkStore from '../store/useBookmarkStore';

export default function AddToFavourites({actived, setActived}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { bookmarks, addBookmark, removeBookmark, clearBookmarks } = useBookmarkStore();

    const handleBookmark = useCallback((item) => {
        addBookmark(item);
    }, [addBookmark]);
    
    return (
        <>
            <div className='w-9 h-9 flex justify-center items-center text-center cursor-pointer border border-solid border-gray-500 p-3 rounded-[50%]'>
                <i className="fa-solid fa-bookmark text-2xl" onClick={() => setIsModalOpen(true)}></i>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 z-[1000] bg-opacity-50 flex items-center justify-center">
                    <div className={`bg-white p-5 rounded-lg max-h-[70%] ${bookmarks.length === 0 ? "overflow-hidden" : "overflow-y-scroll"}`}>
                        <div className='flex w-full justify-between items-center gap-4 mb-4'>
                        <h2 className="font-bold text-xl">Bookmarked Items</h2>
                        <i 
                            className="fa-solid fa-xmark font-bold text-xl cursor-pointer hover:text-red-500" 
                            onClick={() => setIsModalOpen(false)}
                        ></i>
                        </div>
                        {bookmarks.length === 0 ? (
                            <p>No items bookmarked.</p>
                        ) : (
                            <ul className="flex flex-col gap-4 justify-center">
                                {bookmarks.map(item => (
                                    <li key={Math.random()} className="border-b py-2 flex gap-4 items-center">
                                        <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover"/>
                                        <div className="text-left">
                                            <h3 className="font-bold">{item.title}</h3>
                                            <p>{item.date} - {item.price}</p>
                                            <button 
                                                className="text-red-700 cursor-pointer" 
                                                onClick={() => {
                                                    removeBookmark(item.id)
                                                    setActived(actived.filter(itemId => itemId !== item.id))
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button     
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded" 
                            onClick={() => {
                                    clearBookmarks();
                                    setActived([]);
                                }
                            }   
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}



import { create } from "zustand";

const useBookmarkStore = create((set) => ({
    bookmarks: [],

    addBookmark: (item) => set((state) => ({
        bookmarks: [...state.bookmarks, item]
    })),

    removeBookmark: (itemId) => set((state) => ({
        bookmarks: state.bookmarks.filter(item => item.id !== itemId)
    })),

    clearBookmarks: (actives) => set({ bookmarks: [] }),
}))

export default useBookmarkStore;
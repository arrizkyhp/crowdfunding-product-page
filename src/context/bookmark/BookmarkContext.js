import {createContext, useReducer } from 'react';
import bookmarkReducer from "./BookmarkReducer";

const BookmarkContext = createContext()

export const BookmarkProvider = ({ children }) => {
    const initialState = {
        bookmark: false
    }

    const [state, dispatch] = useReducer(bookmarkReducer, initialState)

    return <BookmarkContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}    
    </BookmarkContext.Provider>
}

export default BookmarkContext
import { createContext, useReducer } from "react";
import navbarReducer from "./NavbarReducer";

const NavbarContext = createContext()

export const NavbarProvider = ({ children }) => {
    const initialState = {
        menu: false
    }

    const [state, dispatch] = useReducer(navbarReducer, initialState)

    return <NavbarContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </NavbarContext.Provider>
}

export default NavbarContext
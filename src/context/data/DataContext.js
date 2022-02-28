import { createContext, useReducer } from "react";
import dataReducer from "./DataReducer";
import dataJson from "json/data.json";

const DataContext = createContext()
export const DataProvider = ({children}) => {
    const initialState = {
        data: dataJson,
    }

    const [state, dispatch] = useReducer(dataReducer, initialState)

    return <DataContext.Provider value={{
        data: state.data, dispatch
    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext
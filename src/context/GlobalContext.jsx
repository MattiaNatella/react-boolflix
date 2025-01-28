import { createContext, useContext } from "react"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }
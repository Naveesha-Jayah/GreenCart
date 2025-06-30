import { createContext } from "react"
import { useNavigate } from "react-router-dom";


export const App = createContext();
export const AppContextProvider = ({children})=>{
    const navigate = useNavigate();
    const[user,setUser] =useState(null)
    const[isSeller,setIsSeller] =useState(false)

    const value ={navigate,user,setUser,isSeller,setIsSeller}
    
        return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    
}

export const useAppContext = () => {
    return useContext(AppContext)
  }
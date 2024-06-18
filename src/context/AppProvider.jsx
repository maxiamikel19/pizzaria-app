import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const test = "Testando o context"
    return(
        <AppContext.Provider
            value={{
                test
            }}
        >{children}</AppContext.Provider>
    )
}
export{
    AppProvider
}
export default AppContext
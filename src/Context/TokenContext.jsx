import { createContext,useState } from "react";

export let TokenContext=createContext()

export function TokenContextProvider(props) {



const [token, setToken] = useState(null)


    return (

        <> 
        <TokenContext.Provider value={{token,setToken}}>
        {props.children}

    </TokenContext.Provider>
        </>
    )
   
    
}
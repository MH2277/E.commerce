import { createContext,useState } from "react";

export let countConyext=createContext(0)


export function CounterContextProvider(props) {



    
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState('Ahmed')


    function Counter() {

        setCounter1(Math.random)
        
        
    }


    return <countConyext.Provider value={{counter1,Counter}}>
        {props.children}
    </countConyext.Provider>


}

import { useContext } from "react"
import Brands from "../Brands/Brands"
import Cart from "../Cart/Cart"
import Products from "../Products/Products"
import style from "./Home.module.css"
import { countConyext } from "../../Context/UserContext"





export default function Home() {
  let {counter1,Counter}=useContext(countConyext)


   return (
    <>
    
     <div>Home {counter1}</div>


     <button onClick={(Counter)}> click</button>

     
   

    </>
   

  )
}

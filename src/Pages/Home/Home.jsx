
import { useContext } from "react"
import Brands from "../Brands/Brands"
import Cart from "../Cart/Cart"
import Products from "../Products/Products"
import style from "./Home.module.css"
import RecentProducts from "../../Component/RecentProducts/RecentProducts"
import MainSlider from "../../Component/MainSlider/MainSlider"
import CategorySlider from "../../Component/CategorySlider/CategorySlider"








export default function Home() {


  return (
    <>
      <MainSlider />
      <CategorySlider />

      <RecentProducts />



    </>


  )
}

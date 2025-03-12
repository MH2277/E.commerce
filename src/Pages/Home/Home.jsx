

import RecentProducts from "../../Component/RecentProducts/RecentProducts"
import MainSlider from "../../Component/MainSlider/MainSlider"
import CategorySlider from "../../Component/CategorySlider/CategorySlider"
import {Helmet} from "react-helmet";









export default function Home() {


  return (
    <>

      <Helmet>
        <title>Home </title>
      </Helmet>
      <MainSlider />
      <CategorySlider />

      <RecentProducts />



    </>


  )
}

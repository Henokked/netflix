import React from 'react'
import '../../App.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Banner } from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowLIst/RowList'



const Home = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
<Header/>
<Banner/>
<RowList/>
<Footer/>
</div>
  )
}

export default Home
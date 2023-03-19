import React from 'react'
import { Outlet } from 'react-router-dom'
import CategoryBar from '../components/CategoryBar'
// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <CategoryBar />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default MainLayout
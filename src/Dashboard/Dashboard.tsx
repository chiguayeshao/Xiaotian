import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div>Dashboard</div>
        </div>
    )
}

export default Dashboard

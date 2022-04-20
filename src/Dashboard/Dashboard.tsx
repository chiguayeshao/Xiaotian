import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    return (
        <div>
            <div>Dashboard</div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Dashboard

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    return (
        <div>
            <Navbar />

            <div className="flex container mx-auto">
                <div className="flex space-y-12 mt-10">
                    <p className=" text-4xl">All Posts</p>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default Dashboard

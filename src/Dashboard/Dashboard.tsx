import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import PostCard from '../CommonComponent/PostCard'

const Dashboard = () => {
    return (
        <div>
            <Navbar />

            <div className="flex container mx-auto">
                <div className="flex space-y-12 mt-10 mb-10">
                    <p className=" text-4xl">All Posts</p>
                </div>
            </div>

            <div className=" flex container justify-between mx-auto">
                <section className="flex flex-col mx-auto">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </section>

                {/* avatar */}
                <div className=" w-80 h-80 bg-pink-300"></div>
            </div>

            <Outlet />
        </div>
    )
}

export default Dashboard

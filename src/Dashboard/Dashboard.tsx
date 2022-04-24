import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import PostCard from '../CommonComponent/PostCard'
import axios from 'axios'

const Dashboard = () => {
    const baseUrl = 'http://localhost:3001/posts'
    const [postData, setPostData] = useState([])
    useEffect(() => {
        axios.get(baseUrl).then((res) => {
            setPostData(res.data)
        })
    }, [])

    return (
        <div>
            <Navbar />

            <div className="flex container mx-auto">
                <div className="flex space-y-12 mt-10 mb-10">
                    <p className=" text-4xl">All Posts</p>
                </div>
            </div>

            <div className="flex container justify-between mx-auto">
                <section className="flex flex-col ml-20">
                    {postData.map((post: any) => {
                        return (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                month={post.pushMonth}
                                date={post.pushDate}
                                title={post.title}
                                content={post.content}
                                tags={post.tags}
                            />
                        )
                    })}
                </section>

                {/* avatar */}
                <div className="w-80 h-80 bg-pink-300 mr-20 block"></div>
            </div>

            <Outlet />
        </div>
    )
}

export default Dashboard

import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About/About'
import Dashboard from './Dashboard/Dashboard'
import NotFound from './NotFound/NotFound'
import Tags from './Tags/Tags'
import Archive from './Archive/Archive'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 一级路由 */}
                <Route path="/" element={<Dashboard />}>
                    {/* 二级路由 */}
                    <Route path="about" element={<About />} />
                    <Route path="tags" element={<Tags />} />
                    <Route path="archive" element={<Archive />} />
                </Route>
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About/About'
import Dashboard from './Dashboard/Dashboard'
import NotFound from './NotFound/NotFound'
import Tags from './Tags/Tags'
import Archive from './Archive/Archive'
import Categories from './Categories/Categories'
import Apps from './Apps/Apps'
import Search from './Search/Search'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 一级路由 */}
                <Route path="/" element={<Dashboard />}>
                    {/* 二级路由 */}
                    <Route path="categories" element={<Categories />} />
                    <Route path="tags" element={<Tags />} />
                    <Route path="archive" element={<Archive />} />
                    <Route path="apps" element={<Apps />} />
                    <Route path="about" element={<About />} />
                    <Route path="search" element={<Search />} />
                </Route>
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

const Navbar = () => {
    return (
        <div className="bg-slate-400">
            <nav className="relative container mx-auto">
                <div className="flex justify-center items-center">
                    <div className="m-5 pr-20">
                        <a href="/" className=" font-bold text-white text-2xl">
                            Xiaotian Ye
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="/categories" className="text-white">
                            Categories
                        </a>
                        <a href="/tags" className="text-white">
                            Tags
                        </a>
                        <a href="/archive" className="text-white">
                            Archive
                        </a>
                        <a href="/apps" className="text-white">
                            Apps
                        </a>
                        <a href="/about" className="text-white">
                            About
                        </a>
                        <a href="/search" className="text-white">
                            Search
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

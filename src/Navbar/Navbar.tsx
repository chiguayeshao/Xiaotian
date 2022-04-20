const Navbar = () => {
    return (
        <div className="bg-slate-400">
            <nav className="relative container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="m-5">
                        <a href="/" className=" font-bold text-white">
                            Xiaotian Ye
                        </a>
                    </div>
                    <a href="/categories">Categories</a>
                    <a href="/tags">Tags</a>
                    <a href="/archive">Archive</a>
                    <a href="/apps">Apps</a>
                    <a href="/about">About</a>
                    <a href="/search">Search</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

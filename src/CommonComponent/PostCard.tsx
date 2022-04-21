import React from 'react'

const PostCard = (props?: any) => {
    return (
        <>
            <hr className=" h-1 bg-slate-600 mb-4" />
            <div className="flex justify-around h-52">
                <div className="flex flex-col w-10">
                    <div className="flex justify-center mx-auto text-4xl font-bold">
                        12
                    </div>
                    <div className="flex justify-center mx-auto">2月</div>
                </div>
                <div className="flex flex-col ml-8">
                    <div>
                        <h3 className=" text-3xl mb-4">fuck post</h3>
                    </div>
                    <div>
                        <p>
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                        </p>
                    </div>
                    <div>
                        <button>add</button>
                        <button>delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard

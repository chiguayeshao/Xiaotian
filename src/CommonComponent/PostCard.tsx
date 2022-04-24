import React from 'react'

const PostCard = (props: any) => {
    console.log(props, 'props')
    return (
        <div className=" mb-4">
            <hr className="h-1 bg-slate-600 mb-4" />
            <div className="flex justify-around h-52">
                <div className="flex flex-col w-10">
                    <div className="flex justify-center mx-auto text-4xl font-bold">
                        {props.date}
                    </div>
                    <div className="flex justify-center mx-auto">
                        {props.month}
                    </div>
                </div>
                <div className="flex flex-col ml-8">
                    <div>
                        <h3 className="text-3xl mb-4">{props.title}</h3>
                    </div>
                    <div className="w-auto">
                        <p className="break-words w-min mb-4">
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <button className="px-8 py-2 mr-5 text-white bg-blue-500 rounded-lg hover:bg-blue-300">
                            add
                        </button>
                        <button className="px-8 py-2 mr-5 text-white bg-blue-500 rounded-lg hover:bg-blue-300">
                            delete
                        </button>
                        <button className="px-8 py-2 mr-5 text-white bg-blue-500 rounded-lg hover:bg-blue-300">
                            fuck
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard

import React from 'react'

const PostCard = (props: any) => {
    return (
        <div className="mb-4 block">
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
                    <div>
                        <p className="mb-4 w-min mr-0">
                            {/* {props.content.substring(0, 100) + '...'} */}
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                            fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck
                        </p>
                    </div>
                    <div className="flex justify-start flex-wrap">
                        {props.tags.map((tag: string, index: number) => {
                            return (
                                <button
                                    key={index}
                                    className="px-8 py-2 mr-5 text-white bg-blue-500 rounded-lg hover:bg-blue-300"
                                >
                                    {tag}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard

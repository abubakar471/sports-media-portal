"use client"

import Link from "next/link"
import { useState } from "react";
import { toast } from 'react-toastify';

const HomePollCommentSection = () => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        toast("Your opinion is received");
        setContent("");
    }

    return (
        <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mb-10 flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center md:justify-between lg:justify-between xl:justify-between gap-x-4 gap-y-2">
            <form onSubmit={handleSubmit} className="flex justify-items-start flex-col md:flex-row lg:flex-row xl:flex-row gap-x-2 gap-y-2 w-full md:w-3/4 lg: xl:w-3/4">
                <input type="text" placeholder="Share your opinion..." className="outline-none border-b border-gray-500 bg-transparent grow p-2" value={content} onChange={(e) => setContent(e.target.value)} />
                <button type="submit" className="bg-gradient-to-r from-[#333] via-[#666] to-[#555] text-white rounded-full text-sm p-2 px-8">Post</button>
            </form>

            <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 flex items-end justify-items-end">
                <Link href="/" className="rounded-full border border-solid border-gray-500 text-sm p-1 px-8 text-gray-700">
                    View All Repsonses {"(3456)"}
                </Link>
            </div>
        </div>
    )
}


export default HomePollCommentSection
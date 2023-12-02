"use client"

import Image from "next/image"
import { useState } from "react";
import { FcRatings } from "react-icons/fc";

const HomePollContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [submittedPoll, setSubmittedPoll] = useState(null);
    const [polls, setPolls] = useState([
        {
            _id: "6k4y54ggs2gkDfmfn025n1%42",
            title: "Cristian Ronaldo",
            ratings: 60
        },

        {
            _id: "6k4y54gys2gkD8mfn525n1%42",
            title: "Lionel Messi",
            ratings: 40
        }

    ])
    const handleVote = async (_id) => {
        setIsLoading(true);

        try {
            console.log(_id)
            const poll = polls.find((p) => p._id === _id);
            setSubmittedPoll(poll);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <>
            <div className="w-[80%] md:w-[80%] lg:w-[80%] xl:w-[70%] mx-auto h-[300px] lg:h-[150px] xl:h-[150px] rounded-3xl bg-black mt-20 flex flex-col lg:flex-row xl:flex-row items-center justify-between gap-x-8 gap-y-4 mb-10">
                <div
                    onClick={() => handleVote(polls[0]._id)}
                    className="w-full h-full bg-gradient-to-b from-[#32b7c0] via-slate-800 hover:bg-[#276d74] flex-2 text-gray-200 p-4 rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out text-md lg:text-4xl xl:text-2xl relative">
                    {polls[0].title}

                    <div className="w-[70px] h-[70px] flex items-center justify-center !text-sm text-white bg-black rounded-full p-2 border border-solid border-gray-500 absolute -left-5 -top-5">
                        {polls[0].ratings}%
                    </div>

                    <Image src="/assets/1.png" alt="standing-hooman" width={60} height={60} className="object-contain absolute -top-6 right-4 lg:right-0 xl:right-0 w-[80px] md:w-full lg:w-full xl:w-[120px] h-[100px] md:h-full lg:h-full xl:h-full" />
                </div>

                <div className="flex-1 text-white text-2xl">
                    OR
                </div>

                <div
                    onClick={() => handleVote(polls[1]._id)}
                    className="w-full h-full bg-gradient-to-b from-[#32b7c0] via-slate-800 hover:bg-[#276d74] flex-2 text-gray-200 p-4 rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out text-md lg:text-4xl xl:text-2xl relative">
                    {polls[1].title}

                    <div className="w-[70px] h-[70px] flex items-center justify-center !text-sm text-black bg-white rounded-full p-2 border border-solid border-gray-500 absolute -right-5 -top-5">
                        {polls[1].ratings}%
                    </div>

                    <Image src="/assets/1.png" alt="standing-hooman" width={60} height={60} className="object-contain absolute -top-6 left-4 lg:left-0 xl:left-0 w-[80px] md:w-full lg:w-full xl:w-[120px] h-[100px] md:h-full lg:h-full xl:h-full" />
                </div>
            </div>

            {
                submittedPoll && (
                    <div className="w-[90%] md:w-[80%] lg:w-[80%] xl:w-[70%] mx-auto my-4 font-semibold flex items-center gap-x-2">
                        <p>Vote Submitted : {submittedPoll.title} </p>
                        <p className="flex items-center">
                            {"("}{submittedPoll.ratings}% <FcRatings />{")"}
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default HomePollContainer
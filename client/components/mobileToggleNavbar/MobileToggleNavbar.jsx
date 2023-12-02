"use client"

import { IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiBars4 } from "react-icons/hi2";
import { MdHomeFilled } from "react-icons/md";
import { BiCameraHome } from "react-icons/bi";


const MobileToggleNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center lg:hidden xl:hidden z-50">
            {
                open ? (
                    <IconButton onClick={() => setOpen(false)}>
                        <HiBars4 className="!font-bold transition-all duration-150 ease-in-out" />
                    </IconButton>
                ) : (
                    <IconButton onClick={() => setOpen(true)}>
                        <HiBars3CenterLeft className="!font-bold transition-all duration-150 ease-in-out" />
                    </IconButton>
                )
            }

            {
                open && (
                    <div className={`absolute w-[70%] ${open ? "min-h-[90vh] top-[88px] left-0" : "h-0 -top-[100%] -left-20"}  bg-white transition-all duration-500 ease-in-out shadow-md px-4 py-2 flex flex-col gap-y-2`}>
                        <Link href="/" className="text-lg font-semibold flex items-center gap-x-2 hover:bg-gray-500/10 rounded-md p-2 transition-all duration-300 ease-in-out">
                            <MdHomeFilled className="text-xl font-semibold flex items-center gap-x-2" />
                            <span>Home</span>
                        </Link>
                        <Link href="/" className="text-lg font-semibold flex items-center gap-x-2 hover:bg-gray-500/10 rounded-md p-2 transition-all duration-300 ease-in-out">
                            <BiCameraHome className="text-xl font-semibold flex items-center gap-x-2" />
                            <span>Page 1</span>
                        </Link>
                        <Link href="/" className="text-lg font-semibold flex items-center gap-x-2 hover:bg-gray-500/10 rounded-md p-2 transition-all duration-300 ease-in-out">
                            <BiCameraHome className="text-xl font-semibold flex items-center gap-x-2" />
                            <span>Page 2</span>
                        </Link>
                        <Link href="/" className="text-lg font-semibold flex items-center gap-x-2 hover:bg-gray-500/10 rounded-md p-2 transition-all duration-300 ease-in-out">
                            <BiCameraHome className="text-xl font-semibold flex items-center gap-x-2" />
                            <span>Page 3</span>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default MobileToggleNavbar
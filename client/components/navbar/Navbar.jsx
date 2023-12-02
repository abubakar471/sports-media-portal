import Link from "next/link"
import { GiAbstract041 } from "react-icons/gi";
import MobileToggleNavbar from "../mobileToggleNavbar/MobileToggleNavbar";

const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 w-full flex items-center justify-between bg-[#00e9ff] px-4 md:px-10 lg:px-28 xl:px-32 py-6 z-50">
            <Link href="/" className="flex items-center gap-x-2">
                <GiAbstract041 className="font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl" />
                <p className="font-bold sm:text-sm md:text-xl lg:text-xl xl:text-2xl">DAB</p>
                <p className="font-bold sm:text-sm md:text-xl lg:text-xl xl:text-2xl">Sports Media</p>
            </Link>

            <div className="hidden lg:flex xl:flex items-center gap-x-4">
                <Link href="/" className="text-lg font-semibold">
                    Page 1
                </Link>
                <Link href="/" className="text-lg font-semibold">
                    Page 2
                </Link>
                <Link href="/" className="text-lg font-semibold">
                    Page 3
                </Link>
            </div>

            <MobileToggleNavbar />
        </nav>
    )
}

export default Navbar
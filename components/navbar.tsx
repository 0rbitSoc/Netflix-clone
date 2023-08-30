/* eslint-disable @next/next/no-img-element */
import NavbarItem from "./navbaritem";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="w-full fixed z-40">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90 ">
                <img src="/images/logo.png" alt="logo" className="h-5 lg:h-6 "/>
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Movies"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse"/>
                </div>
                <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className="text-white h-3 transition "/>    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
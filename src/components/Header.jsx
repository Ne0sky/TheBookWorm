import React,{useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {

  const [nav, setNav]=useState(true)

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <nav className="min-w-screen h-16 bg-[#000000] text-white flex flex-row  justify-between md:justify-around items-center sticky top-0 px-4">
      
        <div className="Logo">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-yellow-400"
          >
            TheBookWorm
          </Link>
        </div>

        <div className="links  justify-evenly items-center h-[8rem] hidden md:flex">
          <Link
            to="/search"
            className="bg-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-700 cursor-pointer mx-8"
          >
            Search
          </Link>
          <Link
            to="/library"
            className="bg-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-700 cursor-pointer mx-8"
          >
            Library
          </Link>
          <Link
            to="/bookshelf"
            className="bg-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-700 cursor-pointer mx-8"
          >
            Book shelf
          </Link>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu className="text-white text-3xl"/> }
          
        </div>
        {/* MOBILE MENU */}
        <div className={!nav? "links-mobile fixed left-0 top-0  w-[60%] h-full bg-gradient-to-b from-black to-zinc-900 pt-4 ease-in-out duration-500 " : "fixed left-[-100%]"}>

        <div className="Logo ml-8">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-yellow-400"
            onClick={handleNav}
          >
            TheBookWorm
          </Link>
        </div >
          <div className="pt-12 flex flex-col justify-center items-center">
          <Link
            to="/search"
            onClick={handleNav}
            className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-sm mt-4 cursor-pointer mx-1  w-3/4 text-center"
          >
            Search
          </Link>
          <Link
            to="/library"
            onClick={handleNav}
            className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-sm mt-4 cursor-pointer mx-1 w-3/4 text-center "
          >
            Library
          </Link>
          <Link
            to="/bookshelf"
            onClick={handleNav}
            className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-sm mt-4 cursor-pointer mx-1 w-3/4  text-center"
          >
            Book shelf
          </Link>

          </div>
        </div>

      
    </nav>
  );
};

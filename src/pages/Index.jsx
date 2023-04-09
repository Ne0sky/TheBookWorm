import React from "react";
import { About } from "../components/About";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Index = () => {
  return (
    <div className="flex flex-col items-center   w-screen pt-24 ">
      
      <div className="text-white flex flex-col md:flex-row items-center justify-center text-2xl font-semibold w-3/4 md:w-1/2">
        <div>
        <h1 className=" Logo text-3xl md:text-5xl font-bold text-yellow-400 mb-8 ">
            TheBookWorm
        </h1>
          <h2 className="font-thin text-xl md:text-xl w-5/6">
            Unlock a world of knowledge - explore and download EPUBs
            effortlessly on TheBookWorm, your go-to source for eBooks
            Pick your favourite from a collection of more than <span className="text-yellow-400">70000</span> ebooks.
          </h2>
          <Link to="/library">
            <button className="bg-indigo-600 hover:bg-indigo-700 rounded-xl text-base px-4 py-2 font-medium mt-8 mb-8">
              Get started for free
            </button>
          </Link>
        </div>
        <div>
          <img className=" w-[10rem] md:w-[25rem] h-auto" src="images/Book.png" alt="Book " />
        </div>
      </div>

      <About className="" />
      <div className="text-white flex flex-col md:flex-row justify-start md:w-1/2 w-3/4 mb-16 mt-4">
        <Link className="mr-4" to="/search">
          <button className="bg-indigo-600 hover:bg-indigo-700 rounded-xl text-base px-4 py-2 font-medium mt-2">
            Serch for a book
          </button>
        </Link>
        <Link className="mr-4" to="/bookshelf">
          <button className="bg-indigo-600 hover:bg-indigo-700 rounded-xl text-base px-4 py-2 font-medium mt-2">
            Your book shelf
          </button>
        </Link>
      </div>
      <Footer className="" />
    </div>
  );
};

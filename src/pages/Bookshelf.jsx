import React, { useContext } from 'react'
import { Bookcard } from '../components/Bookcard'
import { GlobalContext } from "../context/Globalstate";
import { Link } from "react-router-dom";

export const Bookshelf = () => {
  const { bookshelf } = useContext(GlobalContext);
  return (
    <>
      <div className="flex items-center justify-center w-full my-4">
        <h3 className="  text-white text-3xl font-semibold mb-4">
          My Bookshelf 📚
        </h3>
      </div>

      <div className=" w-full flex justify-center items-center">
        {bookshelf.length >0 ?(
          <ul className="results grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4  ">
          {bookshelf.map((book) => (
            <li key={book.id}>
              <Bookcard book={book} />
            </li>
          ))}
        </ul>
        ): (
          <h2 className="text-white">No books in your shelf!  <Link className="bg-pink-600 rounded-lg px-4 py-2 ml-2" to='/add'>Add Some !</Link></h2>
          
        )}
        
      </div>
    </>
  );
}

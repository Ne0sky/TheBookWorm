import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";



export const Resultcard = ({ book }) => {

  const {addBookToShelf, bookshelf} = useContext(GlobalContext)

  let storedBook = bookshelf.find(o => o.id === book.id)
  const bookshelfDisabled = storedBook ? true : false;

  return (
    <div className="w-72 max-h-[50rem] text-white rounded-lg  p-4 bg-black flex flex-col justify-around items-center">
      <img
        className="w-56 max-h-72 rounded-xl shadow-lg "
        src={book.formats["image/jpeg"]}
        alt={`${book.title} Poster`}
      />
      <div className="flex flex-col justify-center items-start px-4 w-full py-4">
        <h3 className="text-white text-xl font-semibold mt-4 ">{book.title}</h3>

        {book.authors && book.authors.length > 0 && (
          <h3 className="text-white text-md font-thin mt-1 ">
            {book.authors[0].name}
          </h3>
        )}

        {book.download_count &&(
          <h3 className="text-yellow-400 text-md font-medium mt-4 ">
            Downloads : {book.download_count}
          </h3>
        )}
      </div>

      <div className="flex flex-col justify-center w-full ">
      {bookshelfDisabled ? (
        <button 
        onClick={()=>addBookToShelf(book)}
        disabled={bookshelfDisabled}
        className="text-white disabled:bg-zinc-400 disabled:cursor-not-allowed text-base  bg-indigo-600 hover:bg-indigo-800 px-1 py-2 rounded-md mb-4 w-full">
          Added to shelf
        </button>
      ):(
        <button 
      onClick={()=>addBookToShelf(book)}
      disabled={bookshelfDisabled}
      className="text-white disabled:bg-zinc-400 disabled:cursor-not-allowed text-base  bg-indigo-600 hover:bg-indigo-800 px-1 py-2 rounded-md mb-4 w-full">
        Add to shelf
      </button>
      )}
      
      <div className="flex w-full justify-center  ">
      <a className="w-1/2 mr-4 " href={book.formats["application/epub+zip"]}>
      <button className="text-white disabled:bg-zinc-400 disabled:cursor-not-allowed px-1 py-2  text-base rounded-md bg-indigo-600 hover:bg-indigo-800   w-full ">
        Download
      </button>
      </a>

      <a className="w-1/2 mr-4 " target="_blank" rel="noopener noreferrer" href={book.formats["text/html"]}>
      <button className="text-white disabled:bg-zinc-400 disabled:cursor-not-allowed px-1 py-2  text-base rounded-md bg-indigo-600 hover:bg-indigo-800   w-full ">
        Read online
      </button>
      </a>

      </div>


      </div>
    </div>
  );
};

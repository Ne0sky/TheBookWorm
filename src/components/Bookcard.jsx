import React, {useContext} from 'react'
import { AiFillDelete } from "react-icons/ai"
import { GlobalContext } from '../context/Globalstate';

export const Bookcard = ({book}) => {

    const {removeBookfromShelf}=useContext(GlobalContext)

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
    
            
          </div>
    
          <div className="flex flex-col justify-center w-full ">
         
          
          <div className="flex w-full justify-center items-center ">
          
          <button
          onClick={()=>removeBookfromShelf(book.id)}
           className="text-white disabled:bg-zinc-400 disabled:cursor-not-allowed px-1 py-2 flex items-center justify-center text-base rounded-md bg-red-600 hover:bg-red-800   w-full ">
            <AiFillDelete/> Return book
          </button>
          
    
          
    
          </div>
    
    
          </div>
        </div>
      );
}

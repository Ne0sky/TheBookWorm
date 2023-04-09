import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./Appreducer"

// initial state
const initialState = {
    bookshelf: localStorage.getItem("bookshelf")
      ? JSON.parse(localStorage.getItem("bookshelf"))
      : [],
     };

     // create context
export const GlobalContext = createContext(initialState);

// context provider
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    useEffect(() => {
      localStorage.setItem("bookshelf", JSON.stringify(state.bookshelf));
    }, [state]);
  
    // actions
    const addBookToShelf = (book) => {
      dispatch({ type: "ADD_BOOK_TO_SHELF", payload: book });
    };
  
    const removeBookfromShelf = (id)=>{
      dispatch({type: "REMOVE_BOOK_FROM_SHELF", payload:id})
    }
  
    
  return (
      <GlobalContext.Provider
        value={{
          bookshelf: state.bookshelf,
          addBookToShelf,
          removeBookfromShelf,
          }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
  };
import React, { useState, useEffect } from "react";
import { Resultcard } from "../components/Resultcard";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


export const Library = () => {
  const [results, setResults] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  const getBooks = (page) => {
    const url = page
      ? `https://gutendex.com/books/?page=${page}`
      : "https://gutendex.com/books/";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.error("Error fetching data from Gutendex API:", error);
      });
  };

  const handleNextPage = () => {
    if (results.next) {
      setCurrentPage(currentPage + 1);
      getBooks(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (results.previous) {
      setCurrentPage(currentPage - 1);
      getBooks(currentPage - 1);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="text-white flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-white">
        Welcome to our Library 📚
      </h2>
      <div className="flex w-1/2 md:w-1/5 justify-around my-8">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 disabled:bg-slate-800 disabled:cursor-not-allowed"
          onClick={handlePrevPage}
          disabled={!results.previous}
        >
          Previous{" "}
        </button>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 disabled:bg-slate-800 disabled:cursor-not-allowed"
          onClick={handleNextPage}
          disabled={!results.next}
        >
          Next{" "}
        </button>
      </div>
      <div className="w-full flex justify-center items-center">
        <ul className="results grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4  ">
          {results.results.length > 0 ? (
            results.results.map((book) => (
              <li key={book.id}>
                <Resultcard book={book} />
              </li>
            ))
          ) : (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open
            ><CircularProgress color="inherit" /></Backdrop>
          )}
        </ul>
      </div>
    </div>
  );
};

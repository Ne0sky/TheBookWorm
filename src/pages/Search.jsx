import React, { useState } from "react";
import { Resultcard } from "../components/Resultcard";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ results: [] });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const searchbook = () => {
    setLoading(true);
    fetch(`https://gutendex.com/books/?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data);
          console.log(data);
        } else {
          setResults({ results: [] });
        }
        setLoading(false);
      });
  };

  return (
    <div className="px-4">
      <div className=" flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4 mt-8 text-white">
          Search for your favourite books
        </h2>
        <input
          type="text"
          placeholder="eg. Sherlock Holmes"
          value={query}
          onChange={onChange}
          onKeyPress={(e) => e.key === "Enter" && searchbook()}
          className="bg-zinc-700 focus:outline-none focus:border-sky-500 text-white rounded-md px-4 py-2 md:py-4 w-full md:w-1/2"
        ></input>

        <button
          className="bg-pink-600 px-8 py-2 text-white md:text-2xl rounded-md mt-8 mb-8 hover:bg-pink-700"
          onClick={searchbook}
        >
          Search
        </button>
      </div>

      {results && (
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
                open={loading}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

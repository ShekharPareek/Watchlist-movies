import React, { useEffect, useState } from "react";
import axios from "axios";

const CallApi = () => {
  const [moviedata, setMovieData] = useState([]);
  const [movieSearchQuery, setMovieSearchQuery] = useState("");
  const [buttonClicked, setButtonClicked] = useState({});

  const handleInputChange = (e) => {
    setMovieSearchQuery(e.target.value);
  };

  const fetchData = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${movieSearchQuery}&page=1&plot=full&apikey=b5043a`
    );
    if (response.data.Search) {
      setMovieData(response.data.Search);
      localStorage.setItem("searchmovie", JSON.stringify(response.data.Search));
    } else {
      setMovieData([]);
    }
  };

  useEffect(() => {
    const storedMovieData = JSON.parse(localStorage.getItem("searchmovie")) || [];
    setMovieData(storedMovieData);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleMovieClick = (event, movie) => {
    event.preventDefault();

    const existingWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const movieExists = existingWatchlist.some(watchlistMovie => watchlistMovie.imdbID === movie.imdbID);

    if (movieExists) {
      alert("This movie is already added to your watchlist");
    } else {
      existingWatchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(existingWatchlist));
      setButtonClicked((prevState) => ({
        ...prevState,
        [movie.imdbID]: true
      }));
    }
  };

  return (
    <>
      {/* Search Bar */}
      <div className="mt-9 w-full mb-10">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleInputChange}
            value={movieSearchQuery}
            placeholder="Enter movie title..."
            className="outline-none border-r-0 p-2 w-9/12 border-gray-400 border rounded-lg"
          />
          <button className="inline bg-red-600 p-[9px] text-white rounded-l-none rounded-lg -ml-[12px] border-red-400">
            Search
          </button>
        </form>
      </div>
      {/* Content */}
      {moviedata && moviedata.length > 0 ? (
        <div className="flex flex-wrap gap-5">
          {moviedata.map((movie) => {
            const existingWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
            const movieExists = existingWatchlist.some(watchlistMovie => watchlistMovie.imdbID === movie.imdbID);

            return (
              <div
                key={movie.imdbID}
                className="relative flex w-1/5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
              >
                <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                  <img src={movie.Poster} alt="movie-poster" />
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                  <button
                    onClick={(event) => handleMovieClick(event, movie)}
                    disabled={movieExists || buttonClicked[movie.imdbID]}
                    className="absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                      stroke="black"
                      strokeWidth="4"
                      className="inline"
                    >
                      <path
                        style={{ fill: movieExists || buttonClicked[movie.imdbID] ? 'red' : 'white' }}
                        d="M37,43l-13-6l-13,6V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4V43z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="block font-sans text-[18px] antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                      {movie.Title}
                    </h5>
                    <p className="flex items-center gap-1.5 font-sans text-base font-normal text-blue-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      5.0
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 font-normal">
                    ({movie.Year})
                  </span>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                    {movie.Plot}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
          {/* Fallback content */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="relative flex w-1/5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
            >
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="movie-poster" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="block font-sans text-[18px] antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                    Movie Poster
                  </h5>
                  <p className="flex items-center gap-1.5 font-sans text-base font-normal text-blue-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    5.0
                  </p>
                </div>
                <span className="text-sm text-gray-500 font-normal">
                  (2023)
                </span>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                  This is a placeholder for movie description.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CallApi;

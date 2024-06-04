import React, { useEffect, useState } from 'react'
const MyList = () =>{
const [selectedMovie,setSelectedMovie] = useState([]);
const [buttonClicked,setButtonClicked] = useState(false);
        useEffect(()=>{
            const watchlistData = localStorage.getItem('watchlist') ;
            console.log("Raw watchlist data:", watchlistData);

            if(watchlistData){
              const parsedWatchlist = JSON.parse(watchlistData);
              setSelectedMovie(parsedWatchlist);
              console.log(parsedWatchlist);
            }
            
        }        
        ,[]);

        const handleMovieRemove = (event, index, setSelectedMovie) => {

            event.preventDefault();
            setButtonClicked(true);
            console.log('The index of', index);
            let watchlistData = JSON.parse(localStorage.getItem('watchlist')) || [];
        
            if (index >= 0 && index < watchlistData.length) {
                watchlistData.splice(index, 1);
    
                localStorage.setItem('watchlist', JSON.stringify(watchlistData));
        
                console.log("Here is the data after removal:", watchlistData);
        
                // (watchlistData);
                setSelectedMovie((prevState) => ({
                  ...prevState,
                  [watchlistData]: true
                }));
                window.location.reload();
                
            } else {
                console.error("Invalid index:", index);
            }
          
        };
    return(
        <>
            <h1 className='mt-14'>My Watchlist</h1>
        {/* Content */}
      {selectedMovie.length > 0 ? (
        <div className="flex flex-wrap gap-5 p-14 justify-end overflow-y-auto h-screen">
          {selectedMovie.map((movie,index) => (
            <div
            key={`${movie.id}-${index}`}
              className="relative flex w-1/5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
            >
              <div key={movie.id ? movie.id : index} className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">

                <img src={movie.Poster} alt="movie-poster" />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                <button
                onClick={(event) => handleMovieRemove(event, index, setSelectedMovie)}
                  className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
                stroke="white"
                stroke-width="4"
                className="inline"
              >
                <path
                   style={{ fill: buttonClicked ? 'White' : 'red' }}
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
          ))}
        </div>
      ) : (
        <p className="flex items-center text-gray-600">Sorry No Result Found</p>
      )}













            </>
  )

}

export default MyList
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css"

export const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchTrending);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }
  function truncate(str, n){
    return str?.length > n ? str.substr(0, n -1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents" key={movie.id}>
        <h1 className="banner_title">
          {movie?.title || movie?.original_title}
        </h1>
        <div className="banner_buttons">
          <button className="play">Play</button>
          <button className="play2">My Lists</button>
        </div>
        {<h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>}
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

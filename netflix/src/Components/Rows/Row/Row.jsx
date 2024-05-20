import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchmovies();
  }, []);
  const fetchmovies = async () => {
    try {
      console.log("hello", fetchUrl);
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovie(request.data.results);
    } catch (error) {
      console.log("eror", error);
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.orginal_name).then(
        (url) => {
          console.log(url);
          const urlparms = new URLSearchParams(new URL(url).search);
          // console.log(urlparms);
          // console.log(urlparms.get("v"));
          setTrailerUrl(urlparms.get("v"));
        }
      );
    }
  };
  const opts = {
    height: `390px`,
    width: `640px`,
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <p className="title">{title}</p>
      {/* <p style={{ color: "white", margin:20, fontSize: 32}}>{title}</p> */}
      <div className="card" style={{ display: "flex" }}>
        {movies.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            className={`card2 ${isLargeRow ? "card3" : ""}`}
            width={150}
            // height={100}
            src={`${base_url}${movie?.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && (
          <YouTube style={{ width: "100%" }} videoId={trailerUrl} opts={opts} />
        )}
      </div>
    </>
  );
};

export default Row;

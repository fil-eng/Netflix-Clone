import React, { useEffect, useState } from "react";
import axios from "../../../utils/Axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const requests = await axios.get(fetchUrl);
        setMovie(requests.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);
  const handlePosterClick = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.orginal_name).then(
        (url) => {
          const params = new URLSearchParams(new URL(url).search);
          setTrailer(params.get("v"));
        }
      );
    }
  };
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movie?.map((movie, index) => (
          <img
            onClick={() => handlePosterClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name}
            className={`row_poster ${isLargeRow && " row_posterlarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailer && <YouTube videoId={trailer} opts={opts}></YouTube>}
      </div>
    </div>
  );
}

export default Row;

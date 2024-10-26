import React, { useEffect, useState } from "react";
import axios from "../../utils/Axios";
import requests from "../../utils/Requests";
import "../Banner/banner.css"

function Banner() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(value.data.results[0].backdrop_path);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(movie);
 function truncate (str,n) {
return str?.length >n ? str.substr(0,n-1) + "..." :str
}
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        color: "white",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">play</button>
          <button className="banner_button ">My list</button>
          
        </div>
        <h1 className="banner_discrption">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBotton"></div>
    </div>
  );
}

export default Banner;

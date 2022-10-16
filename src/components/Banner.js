import { useEffect, useState } from "react";
import "../css/Banner.css";
import axios from "../utils/axios";
import requests from "../utils/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  async function fetchData() {
    const request = await axios.get(requests.fetchNetlixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  function truncate(string, number) {
    return string?.length > number
      ? string.substring(0, number - 1) + "..."
      : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <img src="" alt="" />
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;

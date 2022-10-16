import { useEffect, useState } from "react";
import "../css/Row.css";
import axios from "../utils/axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  }

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((item, index) => {
          return (
            ((isLargeRow && item.poster_path) ||
              (!isLargeRow && item.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={index}
                src={`${base_url}${
                  isLargeRow ? item.poster_path : item.backdrop_path
                }`}
                alt="movies"
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Row;

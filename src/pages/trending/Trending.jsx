import axios from "axios";
import { useState, useEffect } from "react";
import Single from "../../components/single/Single";
import "./trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_TMDB_API
      }&page=1`
    );
    setContent(response.data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, []);

  return (
    <div className="movieContainer">
      <h1 className="pageTitle">TOP TRENDING</h1>
      <br />
      <div className="trending">
        {content.map((s) => (
          <Single
            key={s.id}
            id={s.id}
            title={s.title || s.name}
            media_type={s.media_type}
            overview={s.overview}
            poster_path={s.poster_path}
            release_date={s.release_date}
            rating={s.vote_average}
            original_title={s.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;

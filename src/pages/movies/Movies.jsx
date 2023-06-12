import axios from "axios";
import { useState, useEffect } from "react";
import Single from "../../components/single/Single";
import "./movie.css";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(2);

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_TMDB_API
      }&page=${page}`
    );
    setContent(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="movieContainer">
      <h1 className="pageTitle">MOVIES</h1>
      <br />
      <div className="movie">
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
      <CustomPagination setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Movies;

import { useState, useEffect } from "react";
import axios from "axios";
import Single from "../../components/single/Single";
import "./search.css";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  const searchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_API
      }&query=${keyword}&page=${page}`
    );
    setContent(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  useEffect(() => {
    searchData();
    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="searchContainer">
      <h1 className="pageTitle">Search Shows</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => {
          e.preventDefault();
          searchData();
        }}
      >
        <input
          type="text"
          id="searchInpu"
          placeholder="search..."
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
        />
      </form>
      <Button
        className="searchButton"
        onClick={searchData}
        variant="outlined"
        color="error"
        endIcon={<SearchIcon />}
      >
        Search
      </Button>

      <div className="searchResult">
        {content.map((m) => (
          <Single
            key={m.id}
            id={m.id}
            title={m.title || m.name}
            release_date={m.release_date}
            poster_path={m.poster_path}
            vote_average={m.vote_average}
            vote_count={m.vote_count}
            original_title={m.original_title}
          />
        ))}
      </div>
      {totalPages > 1 ? (
        <CustomPagination setPage={setPage} totalPages={totalPages} />
      ) : (
        ""
      )}
    </div>
  );
}

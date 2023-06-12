import PropTypes from "prop-types";
import "./Single.css";
import { Badge } from "@mui/material";
import Details from "../SingleDetail/Details";

const Single = ({
  id,
  title,
  media_type,
  // overview,
  poster_path,
  release_date,
  rating,
  original_title,
}) => {
  return (
    <Details id={id}>
      <div className="single">
        <Badge badgeContent={rating} color="primary" />
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            className="poster"
          />
        ) : (
          <img
            src={"https://screench.com/upload/no-poster.jpeg"}
            alt={original_title}
            className="poster"
          />
        )}

        <h4>{title}</h4>
        <p>{media_type}</p>
        <h5>{`${release_date}`}</h5>
      </div>
    </Details>
  );
};

Single.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  media_type: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  rating: PropTypes.number.isRequired,
  original_title: PropTypes.string.isRequired,
};

export default Single;

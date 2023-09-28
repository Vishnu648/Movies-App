/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "60%",
  height: "80%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#9500ae",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
};

// eslint-disable-next-line react/prop-types
export default function Details({ children, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({});
  const [video, setVideo] = useState();
  const noPoster = "https://screench.com/upload/no-poster.jpeg";

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const movieData = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_TMDB_API
      }`
    );
    setContent(movieData.data);
  };

  const fetchvideo = async () => {
    const videoData = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
        import.meta.env.VITE_TMDB_API
      }`
    );
    setVideo(videoData.data.results[0].key);
  };

  useEffect(() => {
    fetchData();
    fetchvideo();
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          className="detailsBox"
          sx={{
            ...style,
            paddingLeft: "15px",
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${content.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
          }}
        >
          <h2 id="detailsTitle">{content.title}</h2>
          <div id="parent-modal-description" style={{ display: "flex" }}>
            <span>
              {content.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${content.poster_path}`}
                  alt={content.original_title}
                  style={{
                    marginRight: "8px",
                    border: "1px",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <img
                  src={noPoster}
                  alt={content.original_title}
                  style={{ marginRight: "5px", height: "370", width: "210px" }}
                />
              )}
            </span>{" "}
            <div id="detailsOverview" style={{ marginTop: "35px" }}>
              <p> {content.overview} </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "gray",
            }}
          >
            Budget:{content.budget}
            <br />
            Revenue:{content.revenue}
            <br />
            Rating:{content.vote_average}
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              id="website"
              href={content.homepage}
            >
              Official Website
            </a>
          </div>

          <a
            className="youtube"
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/watch?v=${video}`}
          >
            Trailer
          </a>
        </Box>
      </Modal>
    </div>
  );
}

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

export default function CustomPagination({ setPage, totalPages = 1 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        color="primary"
        style={{ margin: "10px 0 15px 0" }}
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </Stack>
  );
}

CustomPagination.propTypes = {
  setPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

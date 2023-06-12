import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#1565c0",
          zIndex: 100,
        }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotSharpIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<LocalMoviesIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<SearchSharpIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

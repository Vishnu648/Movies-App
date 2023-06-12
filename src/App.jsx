import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "./components/Heading/Heading";
import Navbar from "./components/NavBar/Navbar";
import Movies from "./pages/movies/Movies";
import Trending from "./pages/trending/Trending";
import Search from "./pages/search/Search";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <BrowserRouter>
        <Heading />
        <div className="app">
          <Container>
            <Routes>
              <Route exact path="/" Component={Trending} />
              <Route exact path="/movies" Component={Movies} />
              <Route exact path="/search" element={<Search />} />
            </Routes>
          </Container>
        </div>
        <Navbar style={{ marginTop: "60px" }} />
      </BrowserRouter>
    </>
  );
}

export default App;

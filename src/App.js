import "./App.css";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import { Navbar } from "./components/Navbar";

const apiUrl = "https://www.omdbapi.com";
const apiKey = "f2005096";

const fetchMovies = async (search = "The godfather") => {
  if (search.length < 3) {
    return;
  }
  const response = await fetch(
    apiUrl + "?apikey=" + apiKey + "&s=" + search
  ).then((response) => response.json());
  const { Error, Search: movies, totalResults: totalCount } = response;
  console.log(response);
  return { movies, totalCount, Error: Error ?? "" };
};

function App() {
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState("");
  const callApi = async (search = "") => {
    const data = await fetchMovies(search);
    setError(data.Error);
    if (!data.Error.length) {
      setMovies(data.movies);
      setTotalCount(data.totalCount);
    } else {
      setTotalCount(0);
      setMovies([]);
    }
  };

  useEffect(() => {
    callApi("GodFather");
    return () => {};
  }, []);

  return (
    <>
      <Navbar onSearchChange={callApi} />
      <div className="App container-fluid p-0">
        <header className="App-header">
          <h1 className="mt-5">My Favorite Movies ({totalCount})</h1>
        </header>
        {!error ? <MovieList movies={movies} /> : <h2>{error}</h2>}
      </div>
    </>
  );
}

export default App;

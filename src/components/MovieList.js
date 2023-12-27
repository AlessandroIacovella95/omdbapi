import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return (
    <div className="row mt-4 gap-3 justify-content-center">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MovieList;

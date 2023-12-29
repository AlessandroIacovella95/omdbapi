import MovieItem from "./MovieItem";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="row mt-4 gap-3 justify-content-center">
      {movies.map((movie) => (
        <MovieItem
          onSelectMovie={onSelectMovie}
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </div>
  );
};

export default MovieList;

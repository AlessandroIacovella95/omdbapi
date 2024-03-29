const MovieItem = ({ movie, onSelectMovie }) => {
  return (
    <div className="card col-md-3 col-lg-6" style={{ width: "18rem" }}>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
      </div>
      <div className="card-footer">
        <button
          onClick={() => {
            onSelectMovie(movie);
          }}
          href={"movie/" + movie.imdbID}
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Dettagli film
        </button>
      </div>
    </div>
  );
};
export default MovieItem;

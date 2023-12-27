const MovieItem = ({ movie }) => {
  return (
    <div className="card col-md-3 col-lg-6" style={{ width: "18rem" }}>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <a href={"movie/" + movie.imdbID} className="btn btn-primary">
          Dettagli film
        </a>
      </div>
    </div>
  );
};
export default MovieItem;
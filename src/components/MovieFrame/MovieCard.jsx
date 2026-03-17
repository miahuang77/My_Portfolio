// src/components/MovieFrame/MovieCard.jsx
function MovieCard({ movieId, img, onClick }) {
  return (
    <button
      className="movie-card"
      onClick={() => onClick(movieId)}
    >
      <div className="movie-inner">
        <img src={img} alt={movieId} />
      </div>
    </button>
  )
}

export default MovieCard
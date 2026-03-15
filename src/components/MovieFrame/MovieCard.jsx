// src/components/MovieFrame/MovieCard.jsx
function MovieCard({ movieId, img, onClick }) {
  return (
    <button className="movie-card" onClick={() => onClick(movieId)}>
      <img src={img} alt={movieId} />
    </button>
  )
}

export default MovieCard
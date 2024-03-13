
type props = {
    title?: string;
    movies: Movie;
    isvertical?: boolean;
};

function MoviesCarousel({title, movies, isvertical}: props) {
  return (
    <div className="z-50">
        <h2>{title}</h2>
        </div>
  )
}

export default MoviesCarousel
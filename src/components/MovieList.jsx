import PropTypes from 'prop-types'
import Movie from './Movie'

const MovieList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  )
}

MovieList.propTypes = {
  movies: PropTypes.any
}

export default MovieList

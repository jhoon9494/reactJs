import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <img alt={title} src={coverImg}></img>
      <h2>
        <Link to="movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => {
          return <li key={genre}>{genre}</li>;
        })}
      </ul>
    </div>
  );
}
Movie.prototype = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //string을 가진 array타입인 것을 확인
};

export default Movie;

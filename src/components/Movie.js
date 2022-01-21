import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, coverImg, genres }) {
  return (
    <div className={styles.container}>
      <img alt={title} src={coverImg}></img>
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map((genre) => {
          return <li key={genre}>{genre}</li>;
        })}
      </ul>
    </div>
  );
}
Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //string을 가진 array타입인 것을 확인
};

export default Movie;

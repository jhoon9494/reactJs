import { useEffect, useCallback } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading((prev) => !prev);
    setMovie(json.data.movie);
  }, [id]);
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h2 className={styles.loading}>Loading...</h2>
      ) : (
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${movie.background_image})`,
            backgroundSize: "cover",
          }}
        >
          <h2 className={styles.back}>
            <Link to={"/"}>⬅️</Link>
          </h2>
          <img alt={movie.title} src={movie.medium_cover_image}></img>
          <h1>{movie.title_long}</h1>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;

import { useEffect } from "react";
import { useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    ).json();
    setMovies(json.data.movies);
    setLoading((prev) => !prev);
  };

  useEffect(() => {
    getMovies(); //fetch().then() 대신에 function async, await을 사용하면 코드를 간결하게 사용할 수 있음.
    // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMovies(data.data.movies);
    //     setLoading((prev) => !prev);
    //   });
  }, []);
  return (
    <div>
      {loading ? (
        <h2 className={styles.loading}>Loading...</h2>
      ) : (
        <div className={styles.container}>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;

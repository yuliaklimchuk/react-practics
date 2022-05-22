import React, { useState, useEffect } from "react";
import { mapper } from "./utils/mapper";
import movies from "./data/data.json";
import { Button } from "./Button/Button";
import { FilmGallery } from "./FilmGallery/FilmGallery";
import { getFilms } from "./services/api";

import "./App.css";
import { Loader } from "./Loader/Loader";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFilms(page)
      .then((films) => {
        const mapFilms = mapper(films);
        console.log("mapFilms", mapFilms);
        setMovies((prevFilm) => [...prevFilm, ...mapFilms]);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, [page]);
  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };
  return (
    <>
      <FilmGallery movies={movies} />
      {isLoading && <Loader />}
      <Button onToggle={loadMore} />
    </>
  );
}
// class App extends Component {
//   state = {
//     movies: mapper(movies),
//     isShown: false,
//   };

//   onToggleFilms = () => {
//     this.setState((prevState) => ({ isShown: !prevState.isShown }));
//   };

//   onToggleWatched = (id) => {
//     this.setState((prevState) => ({
//       movies: prevState.movies.map((movie) => {
//         if (movie.id === id) {
//           return { ...movie, isWatched: !movie.isWatched };
//         }
//         return movie;
//       }),
//     }));
//   };

//   render() {
//     const { movies, isShown } = this.state;
//     return (
//       <>
//         <Button onToggle={this.onToggleFilms} isShown={isShown} />
//         {isShown && (
//           <FilmGallery movies={movies} onToggleWatched={this.onToggleWatched} />
//         )}
//       </>
//     );
//   }
// }

// export default App;

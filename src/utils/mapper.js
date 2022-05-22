export const mapper = (movies) => {
  console.log(movies);
  return movies.map(({ id, title, backdrop_path: img }) => ({
    id,
    title,
    img,
    isWatched: false,
  }));
};

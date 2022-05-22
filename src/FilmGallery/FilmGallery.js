import { FilmGalleryItem } from "../FilmGalleryItem/FilmGalleryItem";
import PropTypes from "prop-types";
import "../../src/App.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;
export const FilmGallery = ({ movies, onToggleWatched }) => (
  <List>
    {movies.map(({ id, title, img, isWatched }) => (
      <FilmGalleryItem
        key={id}
        id={id}
        title={title}
        img={img}
        isWatched={isWatched}
        clasName="galleryItem"
        // onToggleWatched={onToggleWatched}
      />
    ))}
  </List>
);

FilmGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  onToggleWatched: PropTypes.func.isRequired,
};

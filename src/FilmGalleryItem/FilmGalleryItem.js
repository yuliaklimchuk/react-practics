import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FilmGalleryItem = ({
  id,
  title,
  img,
  isWatched,
  onToggleWatched,
}) => {
  return (
    <Item id={id}>
      <h2>{title}</h2>
      <Image src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} />
      <p onClick={() => onToggleWatched(id)}>Watched: {isWatched.toString()}</p>
    </Item>
  );
};

FilmGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onToggleWatched: PropTypes.func.isRequired,
};

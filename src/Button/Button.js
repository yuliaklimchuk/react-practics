import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonLoad = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  border: none;
  color: white;
  font: inherit;
  background-color: #3f51b5;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  margin-top: 30px;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const Button = ({ onToggle }) => (
  <ButtonLoad onClick={onToggle}>Load more</ButtonLoad>
);

Button.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
};

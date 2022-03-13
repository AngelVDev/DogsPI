import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Landing() {
  return (
    <CocoJambo>
      <h1>The DOGS are HERE</h1>
      <Link to="/home">
        <Button>¡Take me with'em!</Button>
      </Link>
    </CocoJambo>
  );
}
export default Landing;
const CocoJambo = styled.div`
  border-radius: 22px;
  padding: 2em;
  margin: 10em;
  background: linear-gradient(331deg, rgba(22, 47, 51, 0.79) 0%, #3d1e1e 099%);
  box-shadow: -1px 0px 10px 5px rgba(25, 125, 125, 0.74);
`;
const Button = styled.div`
  background: linear-gradient(-45deg, #3f00b5, #9f69fe, #27c8b7, #3f00b5);
  background-size: 800% 400%;
  padding: 1em 2em;
  display: inline-block;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 700;
  color: white;
  transition: all 0.5s ease-in-out;
  animation: gradient 10s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both;
  &:hover {
    animation: gradient 3s infinite;
    transform: scale(1.05);
  }
  &:active {
    animation: gradient 3s infinite;
    transform: scale(0.8);
  }
  @keyframes: gradient 0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

import Context from "../Context";

import { useContext, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import logo from "../logos/ramble.svg";
import addTab from "../controller/addTab";

let Container = styled.div`
  color: #fff;
`;

let Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
  width: 100%;
`;

let LogoImg = styled.img`
  height: 35px;
  object-fit: contain;
  width: 35px;
  margin-right: 15px;
  margin-bottom: -5px;
`;

let LogoText = styled.div`
  font-size: 45px;
  line-height: 0;
  font-weight: 900;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

let Hero = styled.div`
  margin-top: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let Heading = styled.h1`
  width: 80%;
  font-size: 60px;
  text-align: center;
  margin-bottom: 15px;
  font-family: "Playfair Display", Georgia, "Times New Roman", Times, serif;
  @media (max-width: 700px) {
    font-size: 20px;
    width: 90%;
  }
`;

let HeroButton = styled.h1`
  width: auto;
  font-family: Sanchez, Georgia, "Times New Roman", Times, serif;
  background-color: #fff;
  color: #111;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 100px;
  padding: 15px 25px;
  font-size: 15px;
`;

let Circles = styled.div`
  width: 100vw;
  height: 100vw;
  color: #fff;
  border-radius: 100vw;
  border: 1px solid;
  position: absolute;

  top: -25vw;
  pointer-events: none;
  transform: ${({ scale }) => (scale ? `scale(${scale})` : `scale(1)`)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};

  @media (max-width: 700px) {
    display: none;
  }
`;

let Description = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 80%;
  text-align: center;
  font-size: 20px;
  opacity: 0.5;

  @media (max-width: 700px) {
    font-size: 17px;
    width: 90%;
  }
`;

function Intro() {
  const { state, dispatch } = useContext(Context);

  return (
    <Container>
      <Logo>
        <LogoImg src={logo}></LogoImg>
        <LogoText>Ramble</LogoText>
      </Logo>

      <Hero>
        <Heading>FAST . MINIMAL . NOTE TAKING</Heading>
        <Description>
          notes are stored locally so it’s fast & secure. Its minimal design is
          intended to keep you in the flow
        </Description>

        <HeroButton
          onClick={() => {
            addTab({ state, dispatch });
          }}
        >
          + NOTE
        </HeroButton>
      </Hero>

      <Circles scale={0.7} opacity={0.2} />
      <Circles scale={0.85} opacity={0.5} />
      <Circles scale={1} opacity={0.7} />
    </Container>
  );
}

export default Intro;

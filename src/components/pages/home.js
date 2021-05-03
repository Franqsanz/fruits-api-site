import React from "react";
import styled, { keyframes } from "styled-components";
import About from "../about";
import { Fruits } from "../cards";

const position = keyframes`
  0% { background-position: 100% 0; }
  50% { background-position: 0 500%; }
  100% { background-position: 100% 0; }
`;

const SectLogo = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-weight: 600;
  background: linear-gradient(55deg, #fa2a1b, #ffc700, 85%, #03d403);
  background-size: 200%;
  animation: ${position} 6s infinite cubic-bezier(.45,.05,.55,.95) running;
`;

const H1 = styled.h1`
  font-size: clamp(4.5rem, 10vw, 8rem);
  color: #191919;
  margin: 4rem 0 1.5rem 0;
  transform: skewY(-3.5deg);
  text-align: center;
`;

const ContentTags = styled.section`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  align-items: center;
  color: white;
  padding: 0.8rem;
  /* background: var(--background-body); */

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black);
    background: #ffc700;
    padding: 0.23rem 0.3rem 0.23rem 0.3rem;
    margin: 4px;
    border-radius: 5px;

    .number {
      background: black;
      margin: 0 0 0 5px;
      padding: 0.1rem 0.3rem 0.1rem 0.3rem;
      border-radius: 5px;
      color: var(--white);
    }
  }
`;

const PDescription = styled.p`
  max-width: 500px;
/* max-width: clamp(45ch, 50%, 60ch); */
  line-height: 1.66;
  text-align: center;
  font-size: 1rem;
  padding: 0rem 3rem 0 2rem;
`;

const Links = styled.div`
  margin: 1rem 0 0 0;
  font-size: clamp(1.125rem, 5vw, 1.5rem);
`;

const Ul = styled.ul`
  display: flex;
  padding-inline-start: 0;

  @media only screen and (max-width: 425px) {
    & {
      flex-direction: column;
    }
  }
`;

const LiLinks = styled.li`
  margin: 3px;
  text-align: center;
  list-style: none;
`;

const ALink = styled.a`
  display: block;
  width: 180px;
  color: #ffffff;
  padding: 0.8rem;
  border-radius: 5px;
  text-decoration: none;
  background: #000000;
  box-shadow: 0 0 5px #000000;
  margin: 4px;

  &:hover {
    background: linear-gradient(-55deg, #fa2a1b, #ffc700, 85%, #03d403);
    color: #000000;
  }
`;

function Home() {
  // const number = 10;

  return (
    <>
      <SectLogo>
        <H1>FRUITS API</H1>
        <PDescription>
          API pública con datos de árboles frutales, los datos se obtuvieron de
          wikipedia. La información puede variar ya que cada especie tiene muchas variedades.
        </PDescription>
        <Links>
          <Ul>
            <LiLinks>
              <ALink href="https://fruits-api.netlify.app/graphql">
                Playground
              </ALink>
            </LiLinks>
            <LiLinks>
              <ALink href="https://github.com/Franqsanz/fruits-api/">
                Documentación
              </ALink>
            </LiLinks>
          </Ul>
        </Links>
      </SectLogo>
      {/* <h2>TAGS</h2> */}
      {/* <ContentTags>
        <div className="tags">
          ASIA
          <div className="number">{number}</div>
        </div>
        <div className="tags">
          EUROPA
          <div className="number">{number}</div>
        </div>
        <div className="tags">
          ASIA CENTRAL
          <div className="number">{number}</div>
        </div>
        <div className="tags">
          EUROPA CENTRAL
          <div className="number">{number}</div>
        </div>
      </ContentTags> */}
      <Fruits />
      <About />
      {/* <FruitOri /> */}
    </>
  );
}

export default Home;

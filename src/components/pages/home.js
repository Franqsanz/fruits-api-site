import React from "react";
import styled from "styled-components";
import Query from "../query";

const SectLogo = styled.section`
  background: linear-gradient(55deg, #fa2a1b, #ffc700, 85%, #03d403);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-weight: 600;

  /* @media only screen and (max-width: 425px) {
    & {
      padding: 4rem;
    }
  } */
`;

const H1 = styled.h1`
  font-size: 6rem;
  color: #191919;
  transform: skewY(-2deg);
  text-align: center;

  @media only screen and (max-width: 425px) {
    & {
      font-size: 4rem;
    }
  }
`;

export const H1Card = styled.h1`
  padding: 0.8rem;
  /* font-size: 5rem; */
  background: var(--background-body);
`;

export const H2 = styled.h2`
  text-align: center;
  /* background: var(--background-body); */
`;

const ContentTags = styled.section`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  align-items: center;
  color: white;
  padding: 0.8rem;
  background: var(--background-body);

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

export const ContentCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5em;
  /* background: var(--background-body); */
`;

export const Cards = styled.div`
  width: 600px;
  font-size: 1.1rem;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px #c7c7c7;
  padding: 1em;





  /* width: 600px;
  box-shadow: 0 0 5px #c7c7c7;
  border-radius: 10px;
  margin: 5px;
  background: var(--white);
  padding: 1em; */

  & {
    font-size: 1.2rem;
  }

  div {
    padding: 0 0 1em 0 ;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    padding: 0 0 0.5em 0;
    font-style: italic;
  }

  li {
    list-style: none;
  }

  p {
    font-size: 1rem;
    line-height: 1.65;
  }
`;

export const Load = styled.div`
  padding: 2em;
  font-size: 2rem;
  text-align: center;
  background: white;
  font-weight: 700;
`;

export const Li = styled.li`
  padding: 1rem;
  /* font-size: 1.125rem; */
  text-align: center;
  /* background: red; */
`;

function Home() {
  const number = 10;

  return (
    <>
      <SectLogo>
        <H1>FRUITS API</H1>
      </SectLogo>
      {/* <Section>
        <H1>¿Qué es esto?</H1>
        <P>
          Fruits API, es una API GraphQL, que contiene muchos datos de plantas frutales.
        </P>
        <P>Si deseas saber más visita la pagina Acerca de.</P>
      </Section> */}
      {/* <H2>TAGS</H2> */}
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
      <Query />
    </>
  );
}

export default Home;

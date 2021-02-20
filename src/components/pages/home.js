import React from "react";
import styled from "styled-components";
import Query from "../query";

const SectLogo = styled.section`
  padding: 10rem;
  text-align: center;
  font-style: italic;
  font-weight: 600;

  @media only screen and (max-width: 425px) {
    & {
      padding: 4rem;
    }
  }
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

const H2 = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  padding: 0.8rem;
  background: var(--background-body);
`

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
  background: var(--background-body);
`;

export const Cards = styled.div`
  width: 400px;
  /* height: 400px; */
  box-shadow: 0 0 5px #c7c7c7;
  border-radius: 10px;
  margin: 10px;
  background: var(--white);
  padding: 1em;

  & {
    /* text-align: center; */
    font-size: 1.2rem;
  }
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
      <H2>TAGS</H2>
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
      <ContentCards>
        <Query />
      </ContentCards>
    </>
  );
}

export default Home;

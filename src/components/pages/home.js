import React from "react";
import styled from "styled-components";
import Query from "../query";

const SectLogo = styled.section`
  background: linear-gradient(55deg, #fa2a1b, #ffc700, 85%, #03d403);
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  font-size: 7rem;
  color: #191919;
  margin: 5rem 0 2rem 0;
  transform: skewY(-3.5deg);
  text-align: center;

  @media only screen and (max-width: 425px) {
    & {
      font-size: 3.5rem;
    }
  }
`;

// export const H2 = styled.h2`
//   text-align: center;
//   /* background: var(--background-body); */
// `;

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

  @media only screen and (max-width: 425px) {
    & {
      padding: 1.5em 0 0 0;
    }
  }
`;

export const Cards = styled.div`
  width: 600px;
  font-size: 1.1rem;
  margin: 7px;
  border-radius: 5px;
  box-shadow: 0 0 5px #000000;
  overflow: hidden;
  background: whitesmoke;

  & {
    font-size: 1.2rem;
  }

  h1 {
    font-size: 4rem;
    text-align: center;
    padding: 0.5em 0 0.5em 0;
    font-style: italic;
    color: #191919;
    /* background: gold; */
    background: linear-gradient(55deg, #fa2a1b, #ffc700, 85%, #03d403);
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
    padding: 0.5em;
    /* font-style: italic; */
    /* background: #03d403; */
    color: #191919;
  }

  li {
    list-style: none;
  }

  p {
    font-size: 1rem;
    line-height: 1.65;
    padding: 1.5rem;
  }

  @media only screen and (max-width: 425px) {
    h1 {
      font-size: 2.5rem;
    }
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
  text-align: center;
  list-style: none;
`;

const PDescription = styled.p`
  max-width: 450px;
  line-height: 1.77;
  text-align: center;
  font-size: 1.125rem;
  padding: 1rem;
  word-spacing: 5px;
`;

const Links = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;

  @media only screen and (max-width: 425px) {
    & {
      font-size: 1.125rem;
    }
  }
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
  margin: 5px;
  text-align: center;
  list-style: none;
`;

const ALink = styled.a`
  display: block;
  width: 150px;
  color: #ffffff;
  padding: 0.4rem;
  border-radius: 5px;
  text-decoration: none;
  background: #000000;
  box-shadow: 0 0 5px #000000;

  &:hover {
    background: linear-gradient(-55deg, #fa2a1b, #ffc700, 85%, #03d403);
    color: #000000;
  }
`;


function Home() {
  const number = 10;

  return (
    <>
      <SectLogo>
        <H1>FRUITS API</H1>
        <PDescription>
          API publica con datos de arboles frutales, los datos se obtubieron de wikipedia.
          Los datos pueden variar ya que cada arbol tiene muchas variedades.
        </PDescription>
        <Links>
          <Ul>
            <LiLinks><ALink href="https://fruits-api.netlify.app/graphql">Fruits API</ALink></LiLinks>
            <LiLinks><ALink href="https://github.com/Franqsanz/fruits-api/">GitHub</ALink></LiLinks>
          </Ul>
        </Links>
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

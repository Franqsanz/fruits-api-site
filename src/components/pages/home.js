import React from 'react';
import styled from 'styled-components';

const SectLogo = styled.section`
  padding: 10rem;
  text-align: center;
  font-style: italic;
  font-weight: 600;
  background: linear-gradient(55deg, #fa2a1b, #ffc700, 85%, #03d403);

  h1 {
    font-size: 6rem;
    color: #191919;
    transform: skewY(-2deg);
  }
`

const H1 = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  /* padding: 1rem; */
`

const ContentTags = styled.section`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  align-items: center;
  color: white;
  padding: 0.8rem;

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    background: #ffc700;
    padding: 0.23rem 0.3rem 0.23rem 0.3rem;
    margin: 4px;
    border-radius: 5px;

    .number {
      background: black;
      margin: 0 0 0 5px;
      padding: 0.1rem 0.3rem 0.1rem 0.3rem;
      border-radius: 5px;
      color: #ffffff;
    }
  }
`

const ContentCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Cards = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: 0 0 5px #c7c7c7;
  border-radius: 10px;
  margin: 10px;
  background: #ffffff;

  & {
    text-align: center;
    font-size: 1.2rem;
  }
`

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
      {/* <H1>FRUTAS</H1> */}
      <ContentTags>
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
          ASIA CENTRAL
          <div className="number">{number}</div>
        </div>
      </ContentTags>
      <ContentCards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </ContentCards>
    </>
  )
}

export default Home;
import React from "react";
import styled from "styled-components";
import About from "../about";
import { Fruits } from "../cards";

const SectLogo = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-weight: 600;
  background: linear-gradient(55deg, #fa2a1b, #ffc700, 85%, #03d403);
`;

const H1 = styled.h1`
  font-size: 7rem;
  color: #191919;
  margin: 7rem 0 3rem 0;
  transform: skewY(-3.5deg);
  text-align: center;

  @media only screen and (max-width: 425px) {
    & {
      font-size: 4.5rem;
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

const PDescription = styled.p`
  max-width: 480px;
  line-height: 1.66;
  text-align: center;
  font-size: 1rem;
  padding: 1rem;
  word-spacing: 3px;

  @media only screen and (max-width: 425px) {
    & {
      max-width: 300px;
    }
  }
`;

const Links = styled.div`
  margin: 0 0 1rem 0;
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
  width: 180px;
  color: #ffffff;
  padding: 0.4rem;
  border-radius: 5px;
  text-decoration: none;
  background: #000000;
  box-shadow: 0 0 5px #000000;
  margin: 5px;

  &:hover {
    background: linear-gradient(-55deg, #fa2a1b, #ffc700, 85%, #03d403);
    color: #000000;
  }
`;

function Home() {
  return (
    <>
      <SectLogo>
        <H1>FRUITS API</H1>
        <Links>
          <Ul>
            <LiLinks>
              <ALink href="https://fruits-api.netlify.app/graphql">
                Fruits API
              </ALink>
            </LiLinks>
            <LiLinks>
              <ALink href="https://github.com/Franqsanz/fruits-api/">
                Documentación
              </ALink>
            </LiLinks>
          </Ul>
        </Links>
        <PDescription>
          API pública con datos de árboles frutales, los datos se obtuvieron de
          wikipedia. La información pueden variar ya que cada especie tienen
          muchas variedades.
        </PDescription>
      </SectLogo>
      <About />
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
      {/* <Query /> */}
      <Fruits />
      {/* <FruitOri /> */}
    </>
  );
}

export default Home;

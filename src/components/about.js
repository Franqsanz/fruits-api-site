import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  text-align: center;
  color: #f7f7f7;
  padding: 0.5em 0 0.2em 0;
  /* font-size: 3rem; */
  font-size: clamp(2.2rem, 5vw, 3rem);
  font-style: italic;

  /* @media only screen and (max-width: 425px) {
    & {
      font-size: 2.2rem;
    }
  } */
`;

const P = styled.p`
  max-width: 500px;
  line-height: 1.77;
  margin: auto;
  text-align: center;
  color: #f7f7f7;
  padding: 0 2rem 2rem 2rem;
`;

function About() {
  return (
    <>
      <H2>¿Qué es esto?</H2>
      <P>
        Esta es una API GraphQL, que está construida con Apollo Server Lambda.
        Este sitio está desarrollado con ReactJS y Styled Components. Ambos
        proyectos están desplegados en Netlify.
      </P>
    </>
  );
}

export default About;

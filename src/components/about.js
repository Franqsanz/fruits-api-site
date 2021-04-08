import React from "react";
import styled from "styled-components";

const Section = styled.section`
  /* width: 400px;
  height: auto; */
  /* margin: 50px auto; */
  /* box-shadow: 0 15px 50px #c7c7c7; */
  /* border-radius: 10px; */
  padding: 0.8rem;
  /* text-align: center; */
`;

const H2 = styled.h2`
  /* width: 85%; */
  /* margin: 0; */
  text-align: center;
  color: #f7f7f7;
  padding: 0.5em 0 0.5em 0;
  font-size: 3rem;
  font-style: italic;
`;

const P = styled.p`
  max-width: 500px;
  line-height: 1.77;
  margin: auto;
  /* text-align: left; */
  color: #f7f7f7;
  padding: 0.7rem;
`;

function About() {
  return (
    <>
      <H2>¿Qué es esto?</H2>
      <P>
        Esta es una API GraphQL, que está construida con Apollo Server Lambda.
        Este sitio está desarrollado con ReactJS y Styled Components. Ambos proyectos están desplegados en Netlify.
      </P>
    </>
  );
}

export default About;
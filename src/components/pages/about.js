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
  width: 85%;
  margin: auto;
  text-align: left;
`;

const P = styled.p`
  width: 85%;
  line-height: 1.77;
  margin: auto;
  /* text-align: left; */
  padding: 0.7rem;
`;

function About() {
  return (
    <>
      <Section />
      <H2>Acerca de</H2>
    </>
  );
}

export default About;

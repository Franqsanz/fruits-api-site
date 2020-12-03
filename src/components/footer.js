import React from "react";
import styled from "styled-components";

const InfoFooter = styled.footer`
  padding: 2rem;
  text-align: center;
`;

const Info = styled.p`
  color: var(--black);
  margin-top: 10px;

  a {
    text-decoration: none;
    color: #2a2a2a;
    font-weight: 600;
    border-bottom: 2px solid;
  }
`

function Footer() {
  return (
    <InfoFooter>
      <Info>Este sitio está construido con React y Styled Components</Info>
      <Info>
        Hecho con ❤ por
        {' '}
        <a href="https://franqsanz.netlify.app/">Franqsanz</a>
      </Info>
    </InfoFooter>
  );
}

export default Footer;

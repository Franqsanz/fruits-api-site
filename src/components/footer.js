import React from "react";
import styled from "styled-components";

const InfoFooter = styled.footer`
  padding: 1.1rem;
  text-align: center;
  background: linear-gradient(55deg, #fa2a1b, #ffc700, 85%, #03d403);
`;

const Info = styled.p`
  color: var(--black);

  a {
    text-decoration: none;
    color: #2a2a2a;
    font-weight: 600;
    border-bottom: 2px solid;
  }
`;

function Footer() {
  return (
    <InfoFooter>
      <Info>
        Hecho con ❤ por
        {' '}
        <a href="https://franqsanz.netlify.app/">Franqsanz</a>
      </Info>
    </InfoFooter>
  );
}

export default Footer;

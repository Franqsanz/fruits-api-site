import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media only screen and (max-width: 425px) {
    & {
      padding: 1rem;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  padding-inline-start: 0;
`;

const LiLink = styled.li`
  font-size: 1.3rem;
  color: black;
  list-style: none;

  a {
    margin: 0 20px;
    text-decoration: none;
    /* color: #2a2a2a; */
    color: #f9f9f9;
    font-weight: 600;
  }

  a:hover {
    border-bottom: 2px solid;
  }

  @media only screen and (max-width: 425px) {
    & {
      font-size: 1rem;
    }

    a {
      margin: 0 10px;
    }
  }
`;

function Header() {
  return (
    <Headers>
      <nav>
        <Ul>
          <LiLink>
            {/* <Link to="/">INICIO</Link> */}
            <Link to="/acerca-de">Acerca De</Link>
            <a href="https://github.com/Franqsanz/fruits-api/">GitHub</a>
          </LiLink>
        </Ul>
      </nav>
    </Headers>
  );
}

export default Header;

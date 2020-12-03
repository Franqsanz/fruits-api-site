import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  /* background: linear-gradient(-50deg, #fa2a1b, #ffc700, 85%, #03d403); */

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
    color: #2a2a2a;
    /* color: #e1e1e1; */
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
            <Link to="/">INICIO</Link>
            <Link to="/docs">DOCS</Link>
            <Link to="/acerca-de">ACERCA DE</Link>
          </LiLink>
        </Ul>
      </nav>
    </Headers>
  );
}

export default Header;

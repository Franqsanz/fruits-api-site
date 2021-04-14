import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    --background-body: #f5f5f5;
    --white: #ffffff;
    --black: #000000;
  }

  html,
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #2a2a2a;
    color: #2a2a2a;
  }

  *, *::after, *::before {
    margin: 0;
  }
`;

const ContentCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5em;

  @media only screen and (max-width: 425px) {
    & {
      padding: 1.5em 0 1.5em 0;
    }
  }
`;

const Cards = styled.div`
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

const Load = styled.div`
  padding: 2em;
  font-size: 2rem;
  text-align: center;
  background: white;
  font-weight: 700;
`;

const Li = styled.li`
  padding: 0.4rem;
  text-align: center;
  list-style: none;
`;

const UlCard = styled.ul`
  padding-inline-start: 0;
`;

export { Global, ContentCards, Cards, Load, Li, UlCard };

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
  width: 500px;
  margin: 3ch 3ch 0 3ch;
  border-radius: 5px;
  box-shadow: 0 0 10px #000000;
  overflow: hidden;
  background: #101010;
  color: #f1f1f1;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    text-align: center;
    padding: 0.5em 0 0.5em 0;
    font-style: italic;
    color: #191919;
    background: linear-gradient(55deg, #ffc700, 60%, #03d403);
  }

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  h2 {
    font-size: 1.25rem;
    text-align: center;
    padding: 0.5em;
    font-style: italic;
    color: #ffc700;
    border-top: 1px solid #2a2a2a;
  }

  li {
    list-style: none;
  }

  p {
    font-size: 1rem;
    line-height: 1.65;
    padding: 0 1.5rem 1.5rem 1.5rem;
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
  padding: 0 0 0.7rem 0;
  text-align: center;
  list-style: none;
`;

const UlCard = styled.ul`
  padding-inline-start: 0;
`;

export { Global, ContentCards, Cards, Load, Li, UlCard };

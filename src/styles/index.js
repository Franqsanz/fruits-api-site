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
    color: #2a2a2a;
    /* color: #f3f3f3; */
    /* background: var(--background-body); */
    background: linear-gradient(55deg, #fa2a1b, #ffc700, 85%, #03d403);
  }

  *, *::after, *::before {
    margin: 0;
  }
`;

const Footers = styled.footer`
  margin-top: auto;
  padding: 2rem;
  background: #191919;
`;

export { Global, Footers };

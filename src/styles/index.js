import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
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

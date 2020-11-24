import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html,
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #2a2a2a;
    /* color: #f3f3f3; */
    background: #f5f5f5;
  }

  *, *::after, *::before {
    margin: 0;
  }
`

// const Span = styled.span`
//   font-size: 2rem;
//   font-style: italic;
//   font-weight: 600;
//   transform: skewY(-2deg);
// `

const Footers = styled.footer`
  margin-top: auto;
  padding: 2rem;
  background: #191919;
`

export {
  Global,
  Footers
};

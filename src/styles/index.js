import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
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

const Headers = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  /* background: linear-gradient(white,gold, lime); */
`

// const Span = styled.span`
//   font-size: 2rem;
//   font-style: italic;
//   font-weight: 600;
//   transform: skewY(-2deg);
// `

const Ul = styled.ul`
  display: flex;
  padding-inline-start: 0;
`

const NavLink = styled.li`
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
`

const Section = styled.section`
  width: 400px;
  height: auto;
  margin: 50px auto;
  box-shadow: 0 15px 50px #c7c7c7;
  border-radius: 10px;
  padding: 0.8rem;
  /* text-align: center; */
`

const H2 = styled.h2`
  width: 85%;
  margin: auto;
  text-align: left;
`

const P = styled.p`
  width: 85%;
  line-height: 1.77;
  margin: auto;
  /* text-align: left; */
  padding: 0.7rem;
`

const Footers = styled.footer`
  margin-top: auto;
  padding: 2rem;
  background: #191919;
`

export {
  Global,
  Headers,
  Ul,
  NavLink,
  Section,
  H2,
  P,
  Footers
};

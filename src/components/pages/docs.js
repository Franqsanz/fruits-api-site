import React from "react";
import styled from "styled-components";
// import { Test } from "../index";

const Body = styled.body`
  background: white;
`

const Section = styled.section`
  /* width: 400px; */
  height: auto;
  margin: 50px auto;
  box-shadow: 0 15px 50px #c7c7c7;
  border-radius: 10px;
  padding: 0.8rem;
  /* text-align: center; */
`;

const H2 = styled.h2`
  /* width: 85%; */
  /* margin: auto; */
  text-align: left;
  color: red;
`;

const P = styled.p`
  /* width: 85%; */
  line-height: 1.77;
  margin: auto;
  /* text-align: left; */
  padding: 0.7rem;
  background: lime;
`;

function Docs() {
  return (
    <Body>
      {/* <Test /> */}
    </Body>
    // <Section>
    //   <H2>Frutas y mas frutas</H2>
    //   <P>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
    //     sapiente veritatis ipsam quibusdam nostrum dolorem labore repellendus
    //     sed officia iste neque ducimus commodi ex aut incidunt id sint quidem
    //     architecto.
    //   </P>
    // </Section>
  );
}

export default Docs;

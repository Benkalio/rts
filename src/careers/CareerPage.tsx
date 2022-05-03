import React from 'react';
import styled from 'styled-components';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.h1`
  font-weight: strong;
  font-size: 60px;
`
const Body = styled.div`
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
` 
const Joinus = styled.div`
  display: grid;
`
const CareerBody = styled.a`
  width: 100%;
  background-color: lightgrey;
  margin: 10px auto;
  border: 0.1px solid lightgrey;
  border-radius: 20px;
  padding: 5px;
  text-decoration: none;

  &:hover {
    background-color: darkgrey;
  }
`

const Career = styled.div`
  padding-left: 20px;
  color: black;
  outline: none;
`

const CareerPage = () => {
  // library.add(fas);

  return (
    <Body>
      <div>
        <Header>
          We believe
          that reading
          is Magic
        </Header>
        <p>
        And that we need new tools to keep that magic alive.
        Think about a moment when a piece of writing opened
        you up to a totally new understanding of your world.
        Or when a friend had you read something that ignited a conversation
        and forced you to articulate a belief you didn’t quite have the words for. 
        We’re building a tool to give you more of those moments.
        A tool that chooses agency over algorithm.
        Debate over noise. Quality over recency.
        We’re a team of fanatic readers who saw internet technology
        change drastically while our tools for reading remained,
        dismayingly, the same. So with the backing of GV, Y Combinator,
        and many stellar angels, we set out to build something better.
        </p>
        <h2>
          We’re looking for creative,
          ambitious people to help us
          craft the future of reading
        </h2>
        <p>
          You’ll fit right in if you want to take ownership of a product,
          codebase, and company from the ground up.
          We’ve developed a passionate following because we ship fast,
          listen to our users, and sweat the details.
          We’re constantly pushing the boundaries of technology
          and design to rethink what’s possible when it comes to reading.
          If that excites you, we should talk.
        </p>
      </div>
      <Joinus>
        <CareerBody href="#">
          <Career>
            <h4>Design Engineer</h4>
            <p>Fully Remote</p>
          </Career>
          <Career>
            <FontAwesomeIcon icon="square-chevron-right" />
          </Career>
        </CareerBody>
        <CareerBody href="#">
          <Career>
            <h4>Software Engineer, Backend</h4>
            <p>Fully Remote</p>
          </Career>
        </CareerBody>
        <CareerBody href="#">
          <Career>
            <h4>Open Role</h4>
            <p>Fully Remote</p>
          </Career>
        </CareerBody>
      </Joinus>
      <div id="benefits">
        <h3>Benefits</h3>
        <ul>
          <li>Top-tier health insurance</li>
          <li>Stipend for setting up personal workstation. (Fully Remote)</li>
          <li>Freedom to buy or build your ideal work setup</li>
          <li>Competitive salary and equity</li>
          <li>Unlimited resources for books</li>
        </ul>
      </div>
      <div>
        <h3>We always love to chat.</h3>
        <p>For features requests, reach out at help@stoicbible.com</p>
      </div>
    </Body>
  );
}

export default CareerPage;

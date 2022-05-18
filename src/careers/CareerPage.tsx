import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  RoleBody,
  Header,
  Body,
  RoleDiv,
  Role,
  Roles,
  RolesIcon,
  RoleHeader,
  Paragraph,
  Hiring,
  HiringParagraph,
  Remote, 
  Benefits,
  BenefitList,
  Chat,
  Reachout
} from './styles';

const CareerPage = () => {
  return (
    <Body>
      <div>
        <Header>
          We believe that reading is magic.
        </Header>
        <Paragraph>
          And that we need new tools to keep that magic alive.
          Think about a moment when a piece of writing opened
          you up to a totally new understanding of your world.
          Or when a friend had you read something that ignited a conversation
          and forced you to articulate a belief you didn’t quite have the 
          words for.

        </Paragraph>
        <Paragraph>
          We’re building a tool to give you more of those moments.
          A tool that chooses agency over algorithm.
          Debate over noise. Quality over recency.
          We’re a team of fanatic readers who saw internet technology
          change drastically while our tools for reading remained,
          dismayingly, the same. So with the backing of GV, Y Combinator,
          and many stellar angels, we set out to build something better.
        </Paragraph>
        <Hiring>
          We’re looking for creative, ambitious people to help us
          craft the future of reading.
        </Hiring>
        <HiringParagraph>
          You’ll fit right in if you want to take ownership of a product,
          codebase, and company from the ground up.
          We’ve developed a passionate following because we ship fast,
          listen to our users, and sweat the details.
          We’re constantly pushing the boundaries of technology
          and design to rethink what’s possible when it comes to reading.
          If that excites you, we should talk.
        </HiringParagraph>
      </div>
      <Roles>
        <RoleBody href="#">
          <RoleDiv>
            <Role>
              <RoleHeader>UI/UX Designer</RoleHeader>
              <Remote>Fully Remote</Remote>
            </Role>
            <RolesIcon>
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </RolesIcon>
          </RoleDiv>
        </RoleBody>
        <RoleBody href="#">
          <RoleDiv>
            <Role>
              <RoleHeader>Software Engineer, Backend</RoleHeader>
              <Remote>Fully Remote</Remote>
            </Role>
            <RolesIcon>
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </RolesIcon>
          </RoleDiv>
        </RoleBody>
        <RoleBody href="#">
          <RoleDiv>
            <Role>
              <RoleHeader>Open Role</RoleHeader>
              <Remote>Fully Remote</Remote>
            </Role>
            <RolesIcon>
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </RolesIcon>
          </RoleDiv>
          </RoleBody>
      </Roles>
      <div>
        <Benefits>Benefits</Benefits>
        <BenefitList>
          <li>✓ Top-tier health insurance</li>
          <li>✓ Stipend for setting up personal workstation (Fully Remote)</li>
          <li>✓ Freedom to buy or build your ideal work setup</li>
          <li>✓ Competitive salary and equity</li>
          <li>✓ Unlimited resources for books</li>
        </BenefitList>
      </div>
      <div>
        <Chat>We always love to chat.</Chat>
        <Reachout>For features requests, press inquiries and more, reach out at <a href='/'>help@stoicbible.com</a></Reachout>
      </div>
    </Body>
  );
}

export default CareerPage;

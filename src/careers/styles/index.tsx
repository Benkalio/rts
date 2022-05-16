import styled from 'styled-components';

export const Body = styled.div`
  box-sizing: border-box;
  width: 90%;
  max-width: 100%;
  margin: 10px auto;
  padding 3px;

  @media(min-width: 768px) {
    padding: 0 20px;
  }

  @media(min-width: 1440px) {
    width: 40%;
  }
`
export const Header = styled.h1`
  font-size: 48px;

  @media(min-width: 768px) {
    font-size: 70px;
    width: 70%;
  } 

`

export const Paragraph = styled.p`
  text-align: left;
  line-height: 1.5;
  font-size: 1.4rem;
  color: #272929;


`
export const Hiring = styled.h2`
  margin-top: 30px;
  font-size: 1.6rem;
  line-height: 1.5;

  @media(min-width: 768px) {
    width: 65%;
  }
`
export const HiringParagraph = styled.p`
  font-size: 1.2rem;
  color: #272929;
  line-height: 1.2;
`

export const Careers = styled.div`
  display: grid;
`
export const CareerBody = styled.a`
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

  @media(min-width: 768) {

  }
`
export const RoleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
`

export const Roles = styled.div`
  padding-left: 20px;
  width: 80%;
  margin: 5px;
  color: black;
  outline: none;
`

export const Role = styled.h4`
  font-size: 1.4rem;
  padding: 0;
  line-height: 1.0;
  margin-bottom: 10px;

  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`
export const RolesIcon = styled.div`
  color: #2d2e2d;
  font-size: 35px;

  &:hover {
    color: #0f0f0f;
  }
`
export const Remote = styled.p`
  line-height: 2.0;
  margin-top: 2px;
`

export const Benefits = styled.h3`
  font-size: 2rem;
  margin-top: 30px;
  padding: 25px 5px 10px;
`

export const BenefitList = styled.li`
  list-style-type: none;
  padding: 2px;
  margin: 5px 20px;
  line-height: 1.5;
`

export const Chat = styled.h3`
  font-size: 2.5rem;
  line-height: 1.2;

  @media(min-width: 768) {
    width: 50%;
  }
`

export const Reachout = styled.p`
  font-size: 1.3rem;
  line-height: 1.2;
  width: 80%;
`

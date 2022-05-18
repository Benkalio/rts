import styled from 'styled-components';

export const Body = styled.div`
  box-sizing: border-box;
  width: 90%;
  max-width: 100%;
  margin: 10px auto;

  @media(min-width: 768px) {
    padding: 0 20px;
  }

  @media(min-width: 1440px) {
    width: 55%;
  }
`
export const Header = styled.h1`
  font-weight: 500;
  text-align: center;
  padding: 15px 0px;
  line-height: 29px;
  letter-spacing: -0.25px;
  width: 60%;
  margin-left: 15%;

  margin-top: 30px;
  font-size: 30px;

  @media(min-width: 700px) {
    width: 60%;
    margin-left: 170px;
    text-align: center;
    font-size: 60px;
    line-height: 1;
  } 
`

export const Paragraph = styled.p`
  text-align: left;
  line-height: 1.5;
  color: #272929;
  font-size: 1.2rem;

  @media(min-width: 425px){
    font-size: 2rem;
  }
`
export const Hiring = styled.h2`
  width: 100%;
  --text-opacity: 1;
  font-weight: 800;
  font-size: 1.4rem;
  margin: 20px 0;
  line-height: 1.2;

  @media(min-width: 768px) {
    font-size: 2.2rem;
  }
`
export const HiringParagraph = styled.p`
  font-size: 1.2rem;
  color: #272929;
  line-height: 1.5;

  @media(min-width: 425px) {
    font-size: 2rem;
  }

`

export const Roles = styled.div`
  display: grid;
  box-sizing: border-box;
  place-items: center;
  width: 100%;

  @media(min-width: 768px) {
    width: 70%
    align-items: left;
  }
`
export const RoleBody = styled.a`
  width: 100%;
  background-color: lightgrey;
  margin: 10px auto;
  border: none;
  border-radius: 20px;
  text-decoration: none;

  &:hover {
    background-color: darkgrey;
  }

  @media(min-width: 768px) {
    width: 60%
    align-items: left;
  }
`
export const RoleDiv = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  text-size-adjust: 100%;

  @media(min-width: 1440px) {
    margin: 10px auto 10px;
    width: 90%;
  }
`

export const Role = styled.div`
  width: 80%;
  margin: 5px;
  color: black;
  outline: none;
`

export const RoleHeader = styled.h4`
  font-size: 1.2rem;
  padding: 0;
  line-height: 1.2;
  margin-bottom: 10px;

  @media(min-width: 700px) {
    font-size: 2rem;
    margin-bottom: 0;
  };
`
export const RolesIcon = styled.div`
  color: #2d2e2d;
  font-size: 35px;

  &:hover {
    color: #0f0f0f;
  }
`
export const Remote = styled.p`
  line-height: 1.0;
`

export const Benefits = styled.h3`
  margin-bottom: 0;
  margin-top: 30px;
  padding: 25px 5px 10px;  
  font-size: 1.4rem;

  @media(min-width: 425px) {
    font-size: 2rem;
  }
`

export const BenefitList = styled.ul`
  list-style-type: none;
  font-size: 1.1rem;
  padding: 2px;
  margin: 5px 10px;
  line-height: 1.5;

  @media(min-width: 1024px) {
    font-size: 1.8rem;
  }
`

export const Chat = styled.h3`
  line-height: 1.5;
  font-size: 1.4rem;

  @media(min-width: 425px) {
    font-size: 2.2rem;
  }
`

export const Reachout = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  width: 90%;

  @media(min-width: 425px) {
    font-size: 2rem;
  }
`

import styled from "styled-components";

export const Body = styled.div`
  box-sizing: border-box;
  width: 40%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
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
`

export const Header = styled.h1`
  font-weight: strong;
  font-size: 60px;
`

export const Roles = styled.div`
  padding-left: 20px;
  color: black;
  outline: none;
`
export const Careers = styled.div`
  display: grid;
`

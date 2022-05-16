import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  
  // this state has a type of string
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');

    // take the input name and add to the already listed name with setGuest
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>
            {guest}
          </li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
}

export default GuestList;


// import styled from "styled-components";

// export const Body = styled.div`
//   box-sizing: border-box;
//   width: 40%;
//   max-width: 100%;
//   margin: 0 auto;
//   padding: 0 20px;

//   @media(max-width: ${({ theme }) => theme.mobile}) {
//     margin: 0 auto;
//   }
// ` 
// export const Header = styled.h1`
//   font-weight: strong;
//   font-size: 60px;
// `

// export const Paragraph = styled.p`
//   text-align: left;
//   line-height: 2.0;
//   font-size: 1.3rem;
//   color: #272929;
// `

// export const Hiring = styled.h2`
//   margin-top: 30px;
//   margin-bottom: 0;
//   font-size: 1.5rem;
//   width: 60%;
//   line-height: 1.5; 
// `
// export const HiringParagraph = styled.p`
//   font-size: 1.2rem;
//   color: #272929;
//   line-height: 1.5;
// `

// export const Careers = styled.div`
//   display: grid;
// `
// export const CareerBody = styled.a`
//   width: 100%;
//   background-color: lightgrey;
//   margin: 10px auto;
//   border: 0.1px solid lightgrey;
//   border-radius: 20px;
//   padding: 5px;
//   text-decoration: none;

//   &:hover {
//     background-color: darkgrey;
//   }
// `


// export const Roles = styled.div`
//   padding-left: 20px;
//   color: black;
//   outline: none;
// `

// export const Role = styled.h4`
//   font-size: 1.4rem;
//   padding: 0;
//   line-height: 0.5;
//   margin-bottom: 0;
// `
// export const Remote = styled.p`
//   line-height: 2.0;
//   margin-top: 2px;
// `
// export const Benefits = styled.h3`
//   font-size: 2rem;
//   margin-top: 30px;
//   padding: 25px 5px 10px;
// `
// export const BenefitList = styled.li`
//   list-style-type: none;
//   padding: 2px;
//   margin: 5px 20px;
//   line-height: 1.5;
// `
// export const Chat = styled.h3`
//   font-size: 2.5rem;
//   width: 50%;
//   line-height: 1.2;
// `
// export const Reachout = styled.p`
//   font-size: 1.3rem;
//   line-height: 1.2;
//   width: 80%;
// `

// //MOBILE SECTION

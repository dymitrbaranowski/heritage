import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Main = styled.main`
  max-width: 970px;
  margin: 0 auto;
  padding: 120px 16px;
  /* margin: 0 auto; */
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
`;
export const ButtonMore = styled.button`
  padding: 25px;
  background-color: red;
  opacity: 0.8;
`;
export const Team = styled.div`
  margin: 75px 0;
`;
export const Mision = styled.h1`
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  color: #333;
  padding-bottom: 10px;

  &:after {
    content: "";
    background: #333;
    display: block;
    height: 3px;
    width: 150px;
    margin: 10px auto;
  }
`;

export const DivRow = styled.div`
  margin: 75px 0;
`;
// export const DivCol = styled.div`
//   margin: 75px 0;
// `;

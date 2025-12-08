import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 970px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const Header = styled.header`
  padding: 0 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.34);
`;

// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 0;
// `;

export const Logo = styled.h1`
  font-size: 25px;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  color: #9d331f;
`;
export const Nav = styled.nav`
  display: flex;
`;
export const ListItem = styled.li`
  color: #bc6d4f;
  font-size: 16px;
  transition: color 0.3s ease;
`;
export const ItemUl = styled.ul`
  display: flex;

  ${ListItem} + ${ListItem} {
    margin-left: 40px;
  }
  /* 
  &:hover {
    color: #69b9ff;
  }
  &:active {
    color: #0065bd;
  } */
`;

export const ItemLink = styled(NavLink)`
  font-size: 16px;
  color: #bc6d4f;
  transition: color 0.3s ease;

  &:hover {
    color: #9d331f;
    /* color: #0082F3; */
  }
  &:active {
    color: #500805;
    /* color: #0062b6; */
  }
  /* padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: #676770;
  font-size: 16px;
  transition: color 0.3s ease;

  &.active {
    color: white;
    background-color: orangered;
  } */
`;

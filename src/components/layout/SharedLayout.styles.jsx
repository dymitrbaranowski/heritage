import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1333px;
  margin: 0 auto;
  padding: 0 16px;
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

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const Logo = styled.h1`
  font-size: 25px;
  text-transform: uppercase;
  cursor: pointer;
  color: #69b9ff;
`;
export const Nav = styled.nav`
  display: flex;
`;
export const ListItem = styled.li`
  color: #676770;
  font-size: 16px;
  transition: color 0.3s ease;
`;
export const Ul = styled.ul`
  display: flex;

  ${ListItem} + ${ListItem} {
    margin-left: 40px;
  }

  &:hover {
    color: #69b9ff;
  }
  &:active {
    color: #0065bd;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: #676770;
  font-size: 16px;
  transition: color 0.3s ease;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

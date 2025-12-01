import { Routes, Route, NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  HeaderContainer,
  ListItem,
  Logo,
  Nav,
  Ul,
} from "./SharedLayout.styles";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Logo>Heritage Keepers </Logo>
          <Nav>
            <Ul>
              <ListItem>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/about">About</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/gallery">Gallery</NavLink>
              </ListItem>
            </Ul>
          </Nav>
        </HeaderContainer>
      </Header>
      <Outlet />
    </Container>
  );
};

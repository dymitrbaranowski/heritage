import { Routes, Route, NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  ItemLink,
  ItemUl,
  ListItem,
  Logo,
  Nav,
} from "./SharedLayout.styles";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        {/* <Container> */}
        <Container>
          <Logo>Heritage Keepers </Logo>
          <Nav>
            <ItemUl>
              <ListItem>
                <ItemLink to="/" end>
                  Home
                </ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink to="/about">About</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink to="/gallery">Gallery</ItemLink>
              </ListItem>
            </ItemUl>
          </Nav>
          {/* </Container> */}
        </Container>
      </Header>
      <Outlet />
    </>
  );
};

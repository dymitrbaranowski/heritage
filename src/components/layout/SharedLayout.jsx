import { Routes, Route, NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  ImgIcon,
  ItemLink,
  ItemUl,
  ListItem,
  Logo,
  LogoDiv,
  Nav,
} from "./SharedLayout.styles";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        {/* <Container> */}
        <Container>
          <LogoDiv>
            <ImgIcon src="/public/img/Earth.svg" />

            <Logo>Heritage Keepers</Logo>
          </LogoDiv>
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

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
  background-color: black;
`;

const Link = styled(NavLink)`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: coral;
  }
`;

export default function Navbar() {
  return (
    <React.Fragment>
      <Container>
        <Link to={"/home"}>Home</Link>
        <Link to={"/body"}>Body</Link>
        <Link to={"/about"}>About</Link>
      </Container>
      <Outlet />
    </React.Fragment>
  );
}

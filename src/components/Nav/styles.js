import styled from "styled-components";
import { NavLink } from "react-router-dom";

const navWidth = 200;

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: -${navWidth}px;

  width: ${navWidth}px;
  height: 100vh;

  padding-top: 70px;
  background-color: ${(props) => props.theme.light.lighter};

  transition: left 200ms ease;

  &.show {
    left: 0;
  }

  @media (min-width: 1024px) {
    left: 0;
  }
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: "active",
})`
  display: block;
  padding: 15px;

  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;

  svg {
    margin-right: 5px;
    vertical-align: bottom;
  }

  &:hover,
  &.active {
    background-color: #3d1361b2;
  }
`;

export const Separator = styled.span`
  display: block;
  padding: 15px;

  opacity: 0.4;

  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
`;

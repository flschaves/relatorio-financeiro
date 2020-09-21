import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: ${(props) => props.theme.light.primary};
  padding: 15px;
  height: 70px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.span`
  border: 1px solid #fff;
  padding: 5px 5px 2px;
  border-radius: 2px;
  margin-right: 10px;
  cursor: pointer;

  svg {
    color: #fff;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Logo = styled.span``;

export const Tools = styled.div`
  display: none;

  margin-left: auto;
  a {
    display: inline-block;

    font-size: 15px;
    color: #fff;
    text-decoration: none;
  }

  svg {
    margin-right: 5px;
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    display: initial;
  }
`;

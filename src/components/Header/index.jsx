import React from "react";
import { FaGithub, FaBars } from "react-icons/fa";

import logoImage from "../../assets/images/logo.png";
import { Container, Menu, Logo, Tools } from "./styles";

const Header = ({ menuVisible, setMenuVisible }) => (
  <Container>
    <Menu onClick={() => setMenuVisible(!menuVisible)}>
      <FaBars />
    </Menu>

    <Logo>
      <img src={logoImage} alt="" />
    </Logo>

    <Tools>
      <a href="https://github.com/flschaves/relatorio-financeiro/">
        <FaGithub size={16} />
        Ver no Github
      </a>
    </Tools>
  </Container>
);

export default Header;

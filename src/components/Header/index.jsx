import React from "react";
import { FaGithub, FaBars } from "react-icons/fa";

import logoImage from "../../assets/images/logo.png";
import { Container, Menu, Logo, Tools } from "./styles";

const Header = () => (
  <Container>
    <Menu>
      <FaBars />
    </Menu>

    <Logo>
      <img src={logoImage} alt="" />
    </Logo>

    <Tools>
      {/* eslint-disable-next-line */}
      <a
        href="https://github.com/flschaves/relatorio-financeiro/"
        target="_blank"
        rel="noopener noreferer"
      >
        <FaGithub size={16} />
        Ver no Github
      </a>
    </Tools>
  </Container>
);

export default Header;

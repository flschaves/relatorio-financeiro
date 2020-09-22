import React from "react";
import {
  FaInfoCircle,
  FaFunnelDollar,
  FaDoorOpen,
  FaClock,
  FaBirthdayCake,
  FaFileImport,
  FaFileExport,
} from "react-icons/fa";

import { Container, StyledNavLink, Separator } from "./styles";

const items = [
  {
    path: "/salario-liquido",
    icon: <FaFunnelDollar size={16} />,
    label: "Salário Líquido",
  },
  {
    path: "/rescisao",
    icon: <FaDoorOpen size={16} />,
    label: "Rescisão",
  },
  {
    path: "/horas-extras",
    icon: <FaClock size={16} />,
    label: "Horas Extras",
  },
  {
    path: "/saque-aniversario",
    icon: <FaBirthdayCake size={16} />,
    label: "Saque Aniversário",
  },
];

const Nav = ({ menuVisible, setMenuVisible }) => (
  <Container className={menuVisible ? "show" : ""}>
    <StyledNavLink onClick={() => setMenuVisible(false)} exact to="/">
      <FaInfoCircle size={16} />
      Sobre
    </StyledNavLink>

    <Separator>Cálculos</Separator>

    {items.map((item) => (
      <StyledNavLink exact to={item.path} onClick={() => setMenuVisible(false)} key={item.path}>
        {item.icon}
        {item.label}
      </StyledNavLink>
    ))}

    <Separator>Ferramentas</Separator>

    <StyledNavLink exact to="/ferramentas/importar" onClick={() => setMenuVisible(false)} >
      <FaFileImport />
      Importar
    </StyledNavLink>

    <StyledNavLink exact to="/ferramentas/exportar" onClick={() => setMenuVisible(false)} >
      <FaFileExport />
      Exportar
    </StyledNavLink>
  </Container>
);

export default Nav;

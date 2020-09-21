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

const Nav = ({ menuVisible }) => (
  <Container className={menuVisible ? "show" : ""}>
    <StyledNavLink to="/">
      <FaInfoCircle size={16} />
      Sobre
    </StyledNavLink>

    <Separator>Cálculos</Separator>

    {items.map((item) => (
      <StyledNavLink to={item.path} key={item.path}>
        {item.icon}
        {item.label}
      </StyledNavLink>
    ))}

    <Separator>Ferramentas</Separator>

    <StyledNavLink to="/ferramentas/importar">
      <FaFileImport />
      Importar
    </StyledNavLink>

    <StyledNavLink to="/ferramentas/exportar">
      <FaFileExport />
      Exportar
    </StyledNavLink>
  </Container>
);

export default Nav;

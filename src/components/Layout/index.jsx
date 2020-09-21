import React, { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";

import { Main } from "./styles";

const Layout = ({ title, children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Nav menuVisible={menuVisible} />
      <Main>
        {title && <h1>{title}</h1>}
        {children}
      </Main>
    </>
  );
};

export default Layout;

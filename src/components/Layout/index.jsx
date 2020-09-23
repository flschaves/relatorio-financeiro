import React, { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";

import { Main } from "./styles";

const Layout = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Nav menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Main>
        {children}
      </Main>
    </>
  );
};

export default Layout;

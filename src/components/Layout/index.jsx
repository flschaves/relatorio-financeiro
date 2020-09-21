import React, { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";

const Layout = ({ title, children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Nav menuVisible={menuVisible} />
      <main>
        {title && <h1>{title}</h1>}
        {children}
      </main>
    </>
  );
};

export default Layout;

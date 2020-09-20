import React from "react";
import Header from "../Header";

const Layout = ({ title, children }) => {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <main>
        {title && <h1>{title}</h1>}
        {children}
      </main>
    </>
  );
};

export default Layout;

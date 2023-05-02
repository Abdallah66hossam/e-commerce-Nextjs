import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

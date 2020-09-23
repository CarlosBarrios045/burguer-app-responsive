import React from "react";

// Components
import Header from "components/Header";
import Search from "components/Search";
import Menu from "components/Menu";
import Products from "components/Products";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Products />
      <Products />
      <Menu />
      <div style={{ marginBottom: 20 }} />
    </>
  );
};

export default Home;

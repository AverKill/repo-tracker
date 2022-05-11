import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>
          <span>
            <i class="fa fa-github"></i>
          </span>
          {"   "}
          GitHub Repo Tracker
        </h1>
      </header>
      <Outlet />
      <footer>By David Quigley, Doreen Kamushinda & Robyn Shortland</footer>
    </>
  );
};

export default Layout;

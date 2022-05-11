import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>
          <span className="logo">
            <i class="fa-brands fa-github"></i>
          </span>{" "}
          {"  "}
          GitHub Repo Tracker
        </h1>
      </header>
      <Outlet />
      <footer>
        By David Quigley, Doreen Kamushinda & Robyn Shortland © 2022
      </footer>
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet, NavLink } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <header>
        <h1>
          <span className="logo">
            <i class="fa-brands fa-github"></i>
          </span>{" "}
          GitHub Repo Tracker
        </h1>
        <p>This app enables you to search and retrieve GitHub users' repositories and stats!</p>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <button>Back</button>

        </nav>
      </header>
      <Outlet />
      <footer>
        By <a href="url">David Quigley</a>, <a href="url">Doreen Kamushinda</a>, & <a href="url">Robyn Shortland</a> © 2022
      </footer>
    </>
  );
};

export default Layout;

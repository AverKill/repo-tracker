import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Layout = () => {
  let navigate = useNavigate();

  const goToPreviousPath = () => {
    navigate(-1);
  };

  return (
    <>
      <header>
        <h1>
          <span className="logo">
            <i class="fa-brands fa-github"></i>
          </span>{" "}
          GitHub Repo Tracker
        </h1>
        <p>
          This app enables you to search and retrieve GitHub users' repositories
          and stats!
        </p>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <button onClick={goToPreviousPath}>Back</button>
        </nav>
      </header>
      <Outlet />
      <footer>
        By <a href="https://github.com/AverKill/">David Quigley</a>,{" "}
        <a href="https://github.com/doreenkam/">Doreen Kamushinda</a>, &{" "}
        <a href="https://github.com/rsho-create/">Robyn Shortland</a> © 2022
      </footer>
    </>
  );
};

export default Layout;

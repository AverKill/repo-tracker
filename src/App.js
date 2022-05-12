import React from "react";
import { Routes, Route } from "react-router-dom";

import { default as Layout } from "./layouts";
import * as Pages from "./pages";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Pages.IndexPage />} />
        <Route path="/about" element={<Pages.AboutPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;

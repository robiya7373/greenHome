import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import ScrollTop from "./components/scrollToTop/ScrollTop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

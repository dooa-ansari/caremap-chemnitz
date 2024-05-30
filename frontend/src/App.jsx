import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Signin from "pages/signin";
import Signup from "pages/signup";
import Maphome from "pages/maphome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/maphome" element={<Maphome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

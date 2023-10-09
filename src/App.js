import React from "react";
import "./App.css";
import { Article, Cta, Brand,  Navbar } from "./components";
import { Blog, Footer, Header,Feature, Possibility, WhatGPT3 } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Feature />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;

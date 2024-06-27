import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Header } from "./components/header/header";
import { Banner } from "./components/banner/banner";
import { ActorCards } from "./components/actor-cards/actor-cards";
import { Footer } from "./components/footer/footer";
import { Trailer } from "./components/trailer/trailer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <App />
      <Header />
      <Banner />
      <Trailer />
      <ActorCards />
      <Footer />
    </>
  </React.StrictMode>
);

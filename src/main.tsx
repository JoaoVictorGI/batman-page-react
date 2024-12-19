import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router"
import { App } from "./App.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/batman-page-react/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

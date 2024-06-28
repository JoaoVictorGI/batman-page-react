import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer.tsx";
import { Header } from "./components/header/header.tsx";
import { Contacts } from "./pages/Contacts.tsx";
import { Home } from "./pages/Home.tsx";

export function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/batman-page" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

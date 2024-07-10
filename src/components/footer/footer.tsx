import { Link } from "react-router-dom";
import logo from "../../../src/assets/batman-logo.webp";

export function Footer() {
  return (
    <footer className="h-72 mt-12 flex flex-col items-center justify-around">
      <img className="object-contain w-40 h-auto" src={logo} alt="logo" />
      <nav className="w-3/5 block md:hidden visible md:invisible">
        <ul className="flex flex-col items-center w-full justify-between">
          <Link to="/">
            <li
              style={{ transition: "0.5s" }}
              className="list-none pb-2 text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Home
            </li>
          </Link>
          <Link to="/contacts/">
            <li
              style={{ transition: "0.5s" }}
              className="list-none pb-2 text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Contatos
            </li>
          </Link>
          <Link to="/photos/">
            <li
              style={{ transition: "0.5s" }}
              className="list-none pb-2 text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Fotos
            </li>
          </Link>
        </ul>
      </nav>
      <span className="text-white">Desenvolvido por João Victor</span>
    </footer>
  );
}

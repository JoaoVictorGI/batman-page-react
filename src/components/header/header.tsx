import logo from "../../assets/batman-logo.webp";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="h-24 flex justify-around items-center">
      <img className="w-40 h-auto" src={logo} alt="logo" />
      <nav className="w-3/5 hidden md:block invisible md:visible">
        <ul className="flex w-full justify-between">
          <Link to="/">
            <li
              style={{ transition: "0.5s" }}
              className="list-none text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Home
            </li>
          </Link>
          <Link to="/contacts/">
            <li
              style={{ transition: "0.5s" }}
              className="list-none text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Contatos
            </li>
          </Link>
          <Link to="/photos/">
            <li
              style={{ transition: "0.5s" }}
              className="list-none text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Fotos
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

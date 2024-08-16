import { Link } from "react-router-dom"
import logo from "../../assets/batman-logo.webp"

export function Header() {
  return (
    <header className="flex h-24 items-center justify-around">
      <img className="h-auto w-40" src={logo} alt="logo" />
      <nav className="invisible hidden w-3/5 md:visible md:block">
        <ul className="flex w-full justify-between">
          <Link to="/">
            <li
              style={{ transition: "0.5s" }}
              className="cursor-pointer list-none text-lg text-sky-50 hover:text-red-600"
            >
              Home
            </li>
          </Link>
          <Link to="/contacts/">
            <li
              style={{ transition: "0.5s" }}
              className="cursor-pointer list-none text-lg text-sky-50 hover:text-red-600"
            >
              Contatos
            </li>
          </Link>
          <Link to="/photos/">
            <li
              style={{ transition: "0.5s" }}
              className="cursor-pointer list-none text-lg text-sky-50 hover:text-red-600"
            >
              Fotos
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

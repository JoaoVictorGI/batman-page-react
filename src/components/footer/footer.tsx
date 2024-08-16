import { Link } from "react-router-dom"
import logo from "../../../src/assets/batman-logo.webp"

export function Footer() {
  return (
    <footer className="mt-12 flex h-72 flex-col items-center justify-around">
      <img className="h-auto w-40 object-contain" src={logo} alt="logo" />
      <nav className="visible block w-3/5 md:invisible md:hidden">
        <ul className="flex w-full flex-col items-center justify-between">
          <Link to="/">
            <li
              style={{ transition: "0.5s" }}
              className="cursor-pointer list-none pb-2 text-lg text-sky-50 hover:text-red-600"
            >
              Home
            </li>
          </Link>
          <Link to="/contacts/">
            <li
              style={{ transition: "0.5s" }}
              className="cursor-pointer list-none pb-2 text-lg text-sky-50 hover:text-red-600"
            >
              Contatos
            </li>
          </Link>
          <Link to="/photos/">
            <li
              style={{ transition: "0.5s" }}
              className="cursor-pointer list-none pb-2 text-lg text-sky-50 hover:text-red-600"
            >
              Fotos
            </li>
          </Link>
        </ul>
      </nav>
      <span className="text-white">Desenvolvido por João Victor</span>
    </footer>
  )
}

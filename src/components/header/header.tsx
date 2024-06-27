import logo from "../../../src/assets/batman-logo.webp";

export function Header() {
  return (
    <header className="h-24 flex justify-around items-center">
      <img className="w-40 h-auto" src={logo} alt="logo" />
      <nav className="w-3/5">
        <ul className="flex w-full justify-between">
          <a href="">
            <li
              style={{ transition: "0.5s" }}
              className="list-none text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Home
            </li>
          </a>
          <a href="">
            <li
              style={{ transition: "0.5s" }}
              className="list-none text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Contatos
            </li>
          </a>
          <a href="">
            <li
              style={{ transition: "0.5s" }}
              className="list-none text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Fotos
            </li>
          </a>
          <a href="">
            <li
              style={{ transition: "0.5s" }}
              className="list-none text-sky-50 cursor-pointer text-lg hover:text-red-600"
            >
              Comentários
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

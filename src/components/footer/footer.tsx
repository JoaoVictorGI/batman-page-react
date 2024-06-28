import logo from "../../../src/assets/batman-logo.webp";

export function Footer() {
  return (
    <footer className="h-72 mt-12 flex flex-col items-center justify-around">
      <img className="object-contain w-40 h-auto" src={logo} alt="logo" />
      <span className="text-white">Desenvolvido por João Victor</span>
    </footer>
  );
}

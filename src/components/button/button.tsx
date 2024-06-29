export function Button({name}: {name: string}) {
  return (
    <button
      style={{ transition: "0.8s", border: "none", outline: "none" }}
      className="w-48 h-14 bg-red-600 text-white py-2 rounded cursor-pointer text-lg flex justify-center items-center font-bold mt-6 hover:bg-white hover:text-black"
    >
        {name}
    </button>
  );
}

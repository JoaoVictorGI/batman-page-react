export function Button({ name }: { name: string }) {
  return (
    <button
      style={{ transition: "0.8s", border: "none", outline: "none" }}
      className="mt-6 flex h-14 w-48 cursor-pointer items-center justify-center rounded bg-red-600 py-2 text-lg font-bold text-white hover:bg-white hover:text-black"
    >
      {name}
    </button>
  )
}

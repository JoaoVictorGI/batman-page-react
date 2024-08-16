export function ActorCards() {
  return (
    <div className="mt-24 flex w-full justify-center">
      <div className="flex w-full grid-cols-3 flex-wrap justify-center gap-x-5 gap-y-5">
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-[50% 50%] flex h-[600px] w-72 cursor-pointer flex-col justify-end rounded bg-pattison bg-cover bg-center pb-5 pl-2.5 text-lg text-white hover:scale-105 md:w-1/4"
        >
          Robert Pattison - Batman
        </div>
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-[50% 50%] flex h-[600px] w-72 cursor-pointer flex-col justify-end rounded bg-zoe bg-cover bg-center pb-5 pl-2.5 text-lg text-white hover:scale-105 md:w-1/4"
        >
          Zoe Kravitz - Mulher Gato
        </div>
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-[50% 50%] flex h-[600px] w-72 cursor-pointer flex-col justify-end rounded bg-jeffrey bg-cover bg-center pb-5 pl-2.5 text-lg text-white hover:scale-105 md:w-1/4"
        >
          Jeffrey Wright - Gordon
        </div>
      </div>
    </div>
  )
}

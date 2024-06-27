export function ActorCards() {
  return (
    <div className="w-full flex justify-center mt-12">
      <div className="w-11/12 grid grid-cols-3 gap-x-5 gap-y-5">
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-pattison w-full h-[600px] bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 text-white text-lg hover:scale-105"
        >
          Robert Pattison - Batman
        </div>
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-zoe w-full h-[600px] bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 text-white text-lg hover:scale-105"
        >
          Zoe Kravitz - Mulher Gato
        </div>
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-jeffrey w-full h-[600px] bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 text-white text-lg hover:scale-105"
        >
          Jeffrey Wright - Gordon
        </div>
      </div>
    </div>
  );
}

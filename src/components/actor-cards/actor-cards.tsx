export function ActorCards() {
  return (
    <div className="w-full flex justify-center mt-24">
      <div className="w-full flex justify-center flex-wrap grid-cols-3 gap-x-5 gap-y-5">
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-pattison w-72 md:w-1/4 h-[600px] bg-center bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 text-white text-lg hover:scale-105"
        >
          Robert Pattison - Batman
        </div>
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-zoe w-72 md:w-1/4 h-[600px] bg-center bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 text-white text-lg hover:scale-105"
        >
          Zoe Kravitz - Mulher Gato
        </div>
        <div
          style={{
            transition: "1s",
            textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 2px #000",
          }}
          className="bg-jeffrey w-72 md:w-1/4 h-[600px] bg-center bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 text-white text-lg hover:scale-105"
        >
          Jeffrey Wright - Gordon
        </div>
      </div>
    </div>
  );
}

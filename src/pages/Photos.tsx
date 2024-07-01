export function Photos() {
  return (
    <>
      <div className="w-full flex justify-center mt-12">
        <div className="w-4/5 flex justify-center flex-wrap grid-cols-3 gap-x-5 gap-y-5">
          <div style={{transition: "1s"}} className="bg-photo1 w-96 h-56 bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 pr-2.5 hover:scale-105"></div>
          <div style={{transition: "1s"}} className="bg-photo2 w-96 h-56 bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 hover:scale-105"></div>
          <div style={{transition: "1s"}} className="bg-photo3 w-96 h-56 bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 hover:scale-105"></div>
          <div style={{transition: "1s"}} className="bg-photo4 w-96 h-56 bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 hover:scale-105"></div>
          <div style={{transition: "1s"}} className="bg-photo5 w-96 h-56 bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 hover:scale-105"></div>
          <div style={{transition: "1s"}} className="bg-photo6 w-96 h-56 bg-cover bg-[50% 50%] rounded cursor-pointer flex flex-col justify-end pb-5 pl-2.5 hover:scale-105"></div>
        </div>
      </div>
    </>
  );
}

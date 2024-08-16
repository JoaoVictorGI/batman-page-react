export function Photos() {
  return (
    <>
      <div className="mt-12 flex w-full justify-center">
        <div className="flex w-4/5 grid-cols-3 flex-wrap justify-center gap-x-5 gap-y-5">
          <div
            style={{ transition: "1s" }}
            className="bg-[50% 50%] flex h-56 w-96 cursor-pointer flex-col justify-end rounded bg-photo1 bg-cover pb-5 pl-2.5 pr-2.5 hover:scale-105"
          ></div>
          <div
            style={{ transition: "1s" }}
            className="bg-[50% 50%] flex h-56 w-96 cursor-pointer flex-col justify-end rounded bg-photo2 bg-cover pb-5 pl-2.5 hover:scale-105"
          ></div>
          <div
            style={{ transition: "1s" }}
            className="bg-[50% 50%] flex h-56 w-96 cursor-pointer flex-col justify-end rounded bg-photo3 bg-cover pb-5 pl-2.5 hover:scale-105"
          ></div>
          <div
            style={{ transition: "1s" }}
            className="bg-[50% 50%] flex h-56 w-96 cursor-pointer flex-col justify-end rounded bg-photo4 bg-cover pb-5 pl-2.5 hover:scale-105"
          ></div>
          <div
            style={{ transition: "1s" }}
            className="bg-[50% 50%] flex h-56 w-96 cursor-pointer flex-col justify-end rounded bg-photo5 bg-cover pb-5 pl-2.5 hover:scale-105"
          ></div>
          <div
            style={{ transition: "1s" }}
            className="bg-[50% 50%] flex h-56 w-96 cursor-pointer flex-col justify-end rounded bg-photo6 bg-cover pb-5 pl-2.5 hover:scale-105"
          ></div>
        </div>
      </div>
    </>
  )
}

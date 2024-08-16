import { Button } from "../components/button/button"

export function Contacts() {
  return (
    <>
      <div className="bg-[50% 50%] h-[800px] w-full bg-contatos-background bg-cover">
        <section className="flex h-[800px] w-full flex-col items-center justify-center bg-opacity-0 md:items-start md:pl-36">
          <h1 className="bg-opacity-0 text-2xl font-bold text-white">
            Contate-nos
          </h1>
          <h3 className="bg-opacity-0 text-sm font-bold text-white">
            Responderemos quaisquer dúvidas
          </h3>
          <h3 className="bg-opacity-0 text-sm font-bold text-white">
            que você tenha
          </h3>

          <form className="mt-12 flex h-[500px] w-1/2 flex-col items-center bg-opacity-0 md:grid md:items-start">
            <label className="bg-opacity-0">
              <input
                className="mb-4 block h-10 w-full rounded border-red-950 bg-amber-50 pb-5 pl-5 pt-5 text-stone-500 outline-red-950"
                type="text"
                name="name"
                placeholder="Digite seu nome"
              />
            </label>

            <label className="bg-opacity-0">
              <input
                className="mb-4 block h-10 w-full rounded border-red-950 bg-amber-50 pb-5 pl-5 pt-5 text-stone-500 outline-red-950"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
            </label>

            <label className="bg-opacity-0">
              <textarea
                className="mb-4 block h-72 w-full rounded border-red-950 bg-amber-50 pb-5 pl-5 pt-5 text-stone-500 outline-red-950"
                rows={20}
                cols={30}
                placeholder="Digite aqui sua dúvida"
              ></textarea>
            </label>

            <Button name="Enviar" />
          </form>
        </section>
      </div>
    </>
  )
}

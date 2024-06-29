import { Button } from "../components/button/button";

export function Contacts() {
  return (
    <>
      <div className="bg-contatos-background bg-[50% 50%] bg-cover w-full h-[800px]">
        <section className="bg-opacity-0 w-full h-[800px] pl-36 flex flex-col justify-center items-start">
          <h1 className="bg-opacity-0 text-white text-2xl font-bold">
            Contate-nos
          </h1>
          <h3 className="text-white bg-opacity-0 text-sm font-bold">
            Responderemos quaisquer dúvidas
          </h3>
          <h3 className="text-white bg-opacity-0 text-sm font-bold">
            que você tenha
          </h3>

          <form className="bg-opacity-0 mt-12 w-1/2 h-[500px] grid">
            <label className="bg-opacity-0">
              <input
                className="block w-full h-10 pl-5 pt-5 pb-5 mb-4 bg-amber-50 text-stone-500 rounded outline-red-950 border-red-950"
                type="text"
                name="name"
                placeholder="Digite seu nome"
              />
            </label>

            <label className="bg-opacity-0">
              <input
                className="block w-full h-10 pl-5 pt-5 pb-5 mb-4 bg-amber-50 text-stone-500 rounded outline-red-950 border-red-950"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
            </label>

            <label className="bg-opacity-0">
              <textarea
                className="block w-full h-72 pl-5 pt-5 pb-5 mb-4 bg-amber-50 text-stone-500 rounded outline-red-950 border-red-950"
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
  );
}

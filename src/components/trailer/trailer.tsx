import { Button } from "../button/button.tsx";

export function Trailer() {
  return (
    <div id="w-full h-96 flex justify-center">
      <div className="w-11/12 max-w-full flex flex-col md:flex-row items-center justify-between">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/mqqft2x_Aa4?si=h3kK7wPha0G4EnMR"
          title="YouTube video player"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-full md:w-1/2 flex items-center md:items-start flex-col justify-between ml-7">
          <p className="text-white text-lg w-4/6">
            Após dois anos espreitando as ruas como Batman, Bruce Wayne se
            encontra nas profundezas mais sombrias de Gotham City. Com poucos
            aliados confiáveis, o vigilante solitário se estabelece como a
            personificação da vingança para a população.
          </p>
          <Button name="Comprar Ingresso" />
        </div>
      </div>
    </div>
  );
}

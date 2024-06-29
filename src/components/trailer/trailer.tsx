import { Button } from "../button/button.tsx";
import { YoutubeEmbed } from "../iframe/iframe.tsx";

export function Trailer() {
  return (
    <div id="w-full h-96 flex justify-center">
      <div className="w-11/12 flex items-center justify-between">
        {/*<video src="https://youtu.be/mqqft2x_Aa4?si=14mywjc_N2KLCeBR" className="w-1/2 mt-6">
          <source
            src="https://youtu.be/mqqft2x_Aa4?si=14mywjc_N2KLCeBR"
            type="video/webm"
          />
          Seu navegador não possuí suporte para vídeos
        </video>*/}
        <YoutubeEmbed embedId="mqqft2x_Aa4" />
        <div className="w-1/2 flex flex-col justify-between ml-7">
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

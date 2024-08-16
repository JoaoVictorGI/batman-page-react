import { Button } from "../button/button.tsx"

export function Trailer() {
  return (
    <div className="flex h-96 w-full justify-center">
      <div className="flex w-11/12 max-w-full flex-col items-center justify-between md:flex-row md:justify-center">
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
        <div className="ml-7 flex w-full flex-col items-center justify-between md:w-1/2 md:items-start">
          <p className="w-4/6 text-lg text-white">
            Após dois anos espreitando as ruas como Batman, Bruce Wayne se
            encontra nas profundezas mais sombrias de Gotham City. Com poucos
            aliados confiáveis, o vigilante solitário se estabelece como a
            personificação da vingança para a população.
          </p>
          <Button name="Comprar Ingresso" />
        </div>
      </div>
    </div>
  )
}

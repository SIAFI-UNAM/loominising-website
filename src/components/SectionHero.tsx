import { InputUploadImage } from "./InputUploadImage";

export default function SectionHero() {
  return (
    <>
      <div className="bg-gradient-to-tl from-black via-neutral-900 to-black w-full h-screen">
        <div className="mx-auto w-2/3 flex h-full items-center justify-between">
          <div className="w-1/2">
            <h2 className="text-6xl font-bold text-[#fdfdfd]">Loominising</h2>
            <h3 className="text-lg text-neutral-300 mb-5 mt-1">
              Transforma imágenes a bocetos en segundos con IA
            </h3>
            <h4 className="text-lg text-[#fdfdfd] mb-10">
              Nuestro modelo aplica el método Loomis para ayudarte a estructurar
              y dibujar rostros de forma precisa, rápida y creativa. Ideal para
              artistas de todos los niveles.
            </h4>
            <InputUploadImage />
          </div>
          <video
            muted
            autoPlay
            loop
            className="h-100 w-100 object-cover"
          >
            <source
              src="/loomis-method.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
}

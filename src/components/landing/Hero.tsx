"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  onStartQuote: () => void;
}

const youtubeVideoId = "e-djKnsg1AI";
// El video está grabado en 4K: pedimos la máxima calidad. YouTube la ajusta según
// el tamaño de la pantalla y la conexión del visitante (no se puede forzar).
const PLAYBACK_QUALITY = "hd2160";
// Video 16:9 del tamaño justo para cubrir la sección (como object-fit: cover):
// cqw/cqh = ancho/alto del contenedor.
const VIDEO_WIDTH = "max(100cqw, 100cqh * 16 / 9)";
const VIDEO_HEIGHT = `(${VIDEO_WIDTH} * 9 / 16)`;
const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&enablejsapi=1&rel=0&cc_load_policy=0&modestbranding=1&playsinline=1&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&vq=${PLAYBACK_QUALITY}`;

export default function Hero({ onStartQuote }: HeroProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Respaldo por si YouTube no repite el video al terminar: escuchamos el tiempo
  // del reproductor vía postMessage (sin cargar la librería IFrame API).
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const send = (data: object) =>
      iframe.contentWindow?.postMessage(JSON.stringify(data), "*");

    const requestQuality = () =>
      send({ event: "command", func: "setPlaybackQuality", args: [PLAYBACK_QUALITY] });

    const handleLoad = () => {
      send({ event: "listening", id: 1 });
      requestQuality();
    };

    // El iframe viene en el HTML del servidor y puede terminar de cargar antes de
    // que este efecto se ejecute (perderíamos el evento "load"). Por eso repetimos
    // el saludo cada segundo hasta que el reproductor responda.
    let connected = false;
    const handshake = window.setInterval(() => {
      if (connected) window.clearInterval(handshake);
      else handleLoad();
    }, 1000);
    handleLoad();

    const restart = () => {
      send({ event: "command", func: "seekTo", args: [0, true] });
      send({ event: "command", func: "playVideo", args: [] });
    };

    const handleMessage = (e: MessageEvent) => {
      if (e.source !== iframe.contentWindow || typeof e.data !== "string") return;
      try {
        const data = JSON.parse(e.data);
        // Primera respuesta del reproductor: ya está listo, volvemos a pedir la calidad.
        if (!connected) requestQuality();
        connected = true;
        const playerState = data?.info?.playerState; // 0 = terminado
        if (playerState === 0) restart();
      } catch {
        // mensaje que no es del reproductor
      }
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("message", handleMessage);
    return () => {
      window.clearInterval(handshake);
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(104dvh+2cm)] flex items-end overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full [container-type:size]">
        <iframe
          ref={iframeRef}
          key={youtubeVideoId}
          src={youtubeEmbedUrl}
          title="Hero video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
          // Al iframe se le suman 240px de alto (120px arriba y abajo) donde caen
          // el título, logo y controles de YouTube, para que queden fuera de la vista.
          // Se centra con `left` y no con transform: un translate en medio píxel
          // hace que el navegador suavice (desenfoque) el video.
          className="absolute border-0 pointer-events-none"
          style={{
            top: `calc(50% - ${VIDEO_HEIGHT} / 2 - 120px)`,
            left: `calc(50% - ${VIDEO_WIDTH} / 2)`,
            width: `calc(${VIDEO_WIDTH})`,
            height: `calc(${VIDEO_HEIGHT} + 240px)`,
            backgroundColor: "#000",
            border: "none",
          }}
        />

      </div>


      {/* Contenido adaptado a móviles y tablets con safe-area */}
      <div className="relative z-30 w-full pb-[calc(3rem+2cm)] sm:pb-[calc(4rem+2cm)] md:pb-[calc(6rem+2cm)] lg:pb-[5cm] px-5 sm:px-8 md:px-12 lg:px-[3cm] pt-24 sm:pt-28 safe-bottom">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full">

          <div className="w-full md:max-w-[80%] lg:max-w-[70%] text-center space-y-2 sm:space-y-3 [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]">
            {/* Texto superior (Eyebrow) */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase">
              MIJINES
            </p>

            {/* Título Principal */}
            <h1 className="text-[2.7rem] sm:text-[3.2rem] md:text-[4.2rem] font-medium leading-[1.02] text-white tracking-tighter">
              ECUATORIANOS <br />
              EN ACCIÓN
            </h1>

            <div className="pt-1">
              <p className="text-gray-300 text-xs sm:text-sm md:text-base font-medium tracking-tight max-w-2xl mx-auto">
                Somos una organización sin fines de lucro creada para apoyar a la comunidad ecuatoriana en los Estados Unidos. Te acompañamos a dar tus primeros pasos, a aprender a vivir de manera organizada y a conocer y respetar las leyes de este país. Compartimos información útil de todo tipo para que nadie camine solo: aquí nos apoyamos unos a otros.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

"use client";

/** Manifiesto · 01 Visión y Origen */
export default function StudentShowcase() {
  return (
    <section id="vision" className="py-12 md:py-16 lg:py-20 bg-white text-black overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mb-4">01 · Visión y Origen</p>
              <h2 className="font-normal tracking-tight text-black leading-[1.1]">
                <span className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl block mb-2">Ecuador</span>
                <span className="text-gray-500 text-xl md:text-2xl lg:text-3xl font-light">Resurgirá</span>
              </h2>
              <img
                src="/icons/mijines-logo-original.webp"
                alt="MIJINES | ECUATORIANOS EN ACCIÓN"
                loading="lazy"
                className="mt-8 w-56 sm:w-64 lg:w-full lg:max-w-sm h-auto rounded-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-gray-600 text-base leading-[1.7] font-light">
              El Ecuador ha sido históricamente una tierra de gente trabajadora, talento innato y gran riqueza natural;
              sin embargo, las decisiones de políticos irresponsables dividieron a nuestra sociedad y llevaron al país al
              borde de la crisis y la miseria.
              <br />
              <br />
              En este 2026, con la mirada firme en la libertad y el apoyo de aliados estratégicos, nuestra historia ha
              comenzado a cambiar. Por eso nos unimos a esta gran causa: creemos de verdad que, con esfuerzo propio,
              innovación y el respaldo del mundo libre, nuestra nación volverá a resurgir.
            </p>

            <p className="mt-8 text-black text-xl md:text-2xl font-medium tracking-tight leading-snug">
              Bienvenidos a MIJINES | ECUATORIANOS EN ACCIÓN.
            </p>

            <p className="mt-8 text-gray-600 text-base leading-[1.7] font-light">
              Lo que comenzó como una iniciativa comunitaria para conectar a nuestra gente evoluciona hoy hacia una
              plataforma de alcance nacional. MIJINES asume el mandato cívico y económico de construir lo que la
              burocracia nunca supo sostener: un desarrollo de facto impulsado por la tecnología, el libre mercado y el
              talento individual, respetando plenamente las leyes, instituciones y la soberanía de nuestro país.
            </p>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mt-10 mb-4">Escala de despliegue en Ecuador</p>
            <ul className="space-y-4">
              <li className="text-gray-600 text-base leading-[1.7] font-light">
                <strong className="font-medium text-black">Fase Local (La Nueva República):</strong> Empezamos apoyando
                con fuerza a nuestra gente, consolidando la infraestructura de servicios y la red de negocios en todas las
                provincias y ciudades del Ecuador.
              </li>
              <li className="text-gray-600 text-base leading-[1.7] font-light">
                <strong className="font-medium text-black">Fase de Expansión:</strong> Proyección desde el Ecuador hacia
                el mercado internacional como un polo tecnológico y financiero de valores republicanos y soberanía
                productiva.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

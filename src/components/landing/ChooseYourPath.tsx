"use client";

import { sendMetaEvent } from "@/lib/meta-events";
import { getCountrySocialLinks } from "@/lib/country-socials";
import { LOGIN_URL } from "@/lib/site-links";

const COUNTRY = { code: "ec", name: "Ecuador" };

export default function ChooseYourPath() {
  return (
    <section id="planes" className="pt-20 md:pt-28 pb-16 md:pb-20 bg-[#050507] relative overflow-hidden font-sans">
      {/* Sutil efecto de cuadrícula de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Degradado superior para suavizar la unión con el Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#050507] -translate-y-full" />

      <div className="container max-w-[1500px] mx-auto px-6 relative z-10">

        <div className="mb-12 md:mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight mb-4">
            Ayúdanos a unir a todo el Ecuador con tecnología
          </h2>
          <p className="text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Creamos una plataforma para que todos los ecuatorianos puedan acceder a servicios que les permitirán vivir de
            una manera más organizada en los Estados Unidos.
          </p>
        </div>

        {/* Ecuador: su bandera, sus redes y la cápsula de preguntas */}
        <div className="max-w-xl mx-auto flex flex-col items-center text-center">
          <img
            src={`/flags/${COUNTRY.code}.svg`}
            alt={`Bandera de ${COUNTRY.name}`}
            className="w-[120px] h-20 object-cover shadow-lg mb-4"
          />
          <h3 className="text-2xl font-medium text-white tracking-tight mb-8">{COUNTRY.name}</h3>

          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Síguenos</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 mb-10">
            {getCountrySocialLinks(COUNTRY.code).map((social) => (
              <a
                key={social.network}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendMetaEvent('Lead', { source: 'Planes Country Social', country: COUNTRY.name, network: social.label })}
                className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
              >
                <img
                  src={social.imgSrc}
                  alt={social.label}
                  className="w-10 h-10 shrink-0 rounded-lg object-cover border border-white/10 shadow-sm transition-all duration-300 group-hover:border-white/40"
                />
                <span className="text-[11px] font-medium text-gray-400 group-hover:text-white uppercase tracking-wider">{social.label}</span>
              </a>
            ))}
          </div>

          <a
            href={LOGIN_URL}
            onClick={() => sendMetaEvent('Lead', { source: 'Planes Acceder a beneficios', country: COUNTRY.name })}
            className="inline-flex items-center justify-center px-8 py-3 text-sm sm:text-base font-medium text-white rounded-full bg-transparent border border-white/40 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Acceder a beneficios
          </a>
        </div>

        <p className="mt-12 md:mt-16 text-base text-slate-400 max-w-3xl mx-auto leading-relaxed text-center">
          Contamos con miles de empresarios e inversionistas en todo tipo de proyectos, y somos la primera comunidad que ayudará a crear los próximos millonarios del <span className="text-white font-medium">Ecuador</span>.
        </p>

      </div>
    </section>
  );
}

"use client";

import { WHATSAPP_GROUP_LINK } from "@/lib/country-socials";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

const categories = [
  {
    id: "republica",
    title: "ECUATORIANOS EN ACCIÓN",
    faqs: [
      {
        question: "¿Qué es MIJINES | ECUATORIANOS EN ACCIÓN?",
        answer: "Es una comunidad que conecta a los ecuatorianos y les brinda productos y servicios tecnológicos accesibles, respaldados por inteligencia artificial, tecnología y finanzas descentralizadas creadas en los Estados Unidos. Nació como una iniciativa comunitaria para conectar a nuestra gente y hoy evoluciona hacia una plataforma de alcance nacional."
      },
      {
        question: "¿Por qué dicen que Ecuador resurgirá?",
        answer: "Porque el Ecuador es una tierra de gente trabajadora, talento innato y gran riqueza natural. Las decisiones de políticos irresponsables dividieron a nuestra sociedad, pero creemos que con esfuerzo propio, innovación y el respaldo del mundo libre nuestra nación volverá a resurgir."
      },
      {
        question: "¿Cuál es su visión?",
        answer: "Nuestra visión es republicana y capitalista. Defendemos la libertad individual, la propiedad privada, el libre mercado, la supremacía de la ley y los valores occidentales y cristianos como base de la prosperidad. No estamos de acuerdo con el comunismo ni con el socialismo."
      },
      {
        question: "¿Por qué se alinean con los Estados Unidos?",
        answer: "Porque los Estados Unidos lideran la preservación del mundo libre y han vuelto su mirada hacia nuestra región para apoyar el desarrollo y la libertad. Queremos que el Ecuador sea un aliado productivo, tecnológico y moral de primer orden."
      }
    ]
  },
  {
    id: "comunidad",
    title: "Comunidad",
    faqs: [
      {
        question: "¿Quién puede unirse?",
        answer: "Todos los ecuatorianos que decidan regirse por el mérito, la disciplina y el trabajo productivo: profesionales, emprendedores, empresarios, inversionistas, estudiantes, programadores, técnicos y creadores."
      },
      {
        question: "¿Importa de qué provincia o ciudad soy?",
        answer: "No. Para nosotros la comunidad ecuatoriana es una sola. Ayudamos a quien sea, sin importar de qué provincia o ciudad del Ecuador provenga, y todos son bienvenidos, donde quiera que se encuentren: en el Ecuador o en los Estados Unidos."
      },
      {
        question: "¿Cómo me uno a la comunidad?",
        answer: "En la sección de Ecuador encontrarás nuestras redes sociales (Facebook, Instagram y WhatsApp) para unirte. También puedes entrar directamente a nuestro grupo de WhatsApp desde el botón al final de esta sección."
      },
      {
        question: "¿Esto tiene que ver con política?",
        answer: "No somos un partido político. Construimos un desarrollo de facto a través de la tecnología, el libre mercado y el talento individual, respetando plenamente las leyes, las instituciones y la soberanía de nuestro país."
      }
    ]
  },
  {
    id: "servicios",
    title: "Servicios",
    faqs: [
      {
        question: "¿Qué servicios ofrecen?",
        answer: "Servicios que te permiten vivir de una manera más organizada en los Estados Unidos y todo lo necesario para crear y hacer crecer tu empresa: creación de la empresa, redes sociales organizadas, campañas publicitarias, tu propio sitio web, diseño de logos, manual de marca, marca personal y logística."
      },
      {
        question: "¿Tengo que hacerlo todo yo mismo?",
        answer: "Tú decides. Creamos cursos y guías paso a paso para que puedas hacerlo por ti mismo, pero si se te hace difícil o prefieres no hacerlo, nuestro equipo lo hace por ti."
      },
      {
        question: "¿Cuánto cuestan los servicios?",
        answer: "Nuestro objetivo es ofrecer servicios tecnológicos a un costo inferior al del mercado actual, para eliminar las barreras de entrada a los negocios. Puedes ver los planes disponibles en la Tienda."
      },
      {
        question: "¿Qué es MIJINES Streaming?",
        answer: "Es el canal de MIJINES: entrevistas con empresarios e inversionistas, historias reales de emprendedores ecuatorianos, masterclasses para crear y hacer crecer tu empresa, y contenido sobre tecnología, inteligencia artificial y finanzas descentralizadas."
      }
    ]
  },
  {
    id: "plataforma",
    title: "Plataforma y Pagos",
    faqs: [
      {
        question: "¿Cómo accedo a la plataforma MIJINES?",
        answer: "Haz clic en \"Ingresar\" en la barra superior o en \"Acceder a beneficios\" en la sección de Ecuador. Si aún no tienes cuenta, regístrate. Desde ahí podrás acceder a los beneficios, las guías, los cursos y los servicios."
      },
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Puedes pagar con tarjeta (Visa, Mastercard o AMEX) de forma segura a través de Stripe, o con stablecoins y criptomonedas (USDC, USDT, SOL o LXR) en la red Solana."
      },
      {
        question: "¿Qué es Luxor (LXR)?",
        answer: "Luxor es la moneda digital del ecosistema. Puedes usarla como método de pago dentro de la plataforma, junto con USDC, USDT y SOL."
      }
    ]
  }
];

export default function FAQsSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const filteredFaqs = selectedCategory === "all"
    ? categories.flatMap(cat => cat.faqs.map(faq => ({ ...faq, categoryId: cat.id, categoryTitle: cat.title })))
    : categories.find(cat => cat.id === selectedCategory)?.faqs.map(faq => {
      const cat = categories.find(c => c.id === selectedCategory)!;
      return { ...faq, categoryId: cat.id, categoryTitle: cat.title };
    }) || [];

  const toggleExpand = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 lg:py-28 bg-black font-sans text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">
            Tus dudas resueltas <br className="hidden md:inline" />
            <span className="text-gray-400">de forma directa</span>
          </h2>
          <p className="text-lg text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Todo sobre MIJINES | ECUATORIANOS EN ACCIÓN: la comunidad ecuatoriana, nuestros servicios y la plataforma. Transparencia total desde el primer momento.
          </p>
        </div>

        {/* Category Pills (Filtros) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setExpandedIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-white text-black shadow-md shadow-white/10"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Vertical Accordion List */}
        <div className="border-t border-white/10 divide-y divide-white/10 mb-20">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq, idx) => {
              const id = `${faq.categoryId}-${idx}`;
              const isExpanded = expandedIndex === id;

              return (
                <div key={id} className="py-5 transition-colors duration-300 hover:bg-white/[0.02] px-2 rounded-xl">
                  <button
                    onClick={() => toggleExpand(id)}
                    className="w-full flex justify-between items-center text-left py-2 group focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col gap-1 pr-6">
                      <span className="text-base md:text-lg font-medium text-white transition-colors duration-200">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 ${
                        isExpanded ? "rotate-180 bg-white border-white text-black group-hover:bg-white group-hover:text-black" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25, delay: 0.05 } }
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pt-2 text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* WhatsApp CTA Dudas - Sin contenedor (Estilo Nota) */}
        <div className="mt-16 text-center max-w-xl mx-auto flex flex-col items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
            <span className="font-semibold text-white block mb-1 text-sm md:text-base">¿Aún tienes dudas? Es normal.</span>
            Entendemos que nuestra comunidad tiene preguntas sobre muchos temas, y uno de los más importantes es el trabajo.
            En nuestra comunidad aprenderás a buscar empleo y muchas otras cosas necesarias para vivir de manera
            organizada en los Estados Unidos. Únete a nuestro grupo de WhatsApp y no camines solo.
          </p>
          
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[340px] px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm md:text-base hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:border-blue-600 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-300"
          >
            <WhatsappIcon className="w-5 h-5" />
            <span className="ml-2.5">Únete a la comunidad</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}

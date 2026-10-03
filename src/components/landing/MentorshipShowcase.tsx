"use client";

/** Manifiesto · 03 Toda la comunidad ecuatoriana somos Uno */
export default function MentorshipShowcase() {
    return (
        <section id="america" className="py-12 md:py-16 lg:py-20 bg-white text-black overflow-hidden font-sans">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mb-4">03 · Toda la comunidad ecuatoriana somos Uno</p>
                        <h2 className="font-normal tracking-tight text-black leading-[1.1]">
                            <span className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl block mb-2 font-medium">Bienvenidos a</span>
                            <span className="text-gray-500 text-xl md:text-2xl lg:text-3xl font-light">la nueva era tecnológica del Ecuador</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-7">
                        <p className="text-gray-600 text-base leading-[1.7] font-light">
                            Te invitamos a olvidar las barreras y divisiones que nos han impuesto los políticos, a poner la
                            mano en el corazón y a pensar en el futuro de nuestra gente. Ayudaremos a quien sea, sin importar
                            de qué provincia o ciudad del Ecuador provenga: para nosotros la comunidad ecuatoriana es una
                            sola, y todos son bienvenidos, donde quiera que se encuentren.
                            <br />
                            <br />
                            MIJINES opera como una red descentralizada de servicios, infraestructura y educación orientada a
                            la creación masiva de capital y patrimonio para los ecuatorianos:
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li className="text-gray-600 text-base leading-[1.7] font-light">
                                <strong className="font-medium text-black">Servicios tecnológicos por debajo del mercado:</strong> Plataformas operativas y recursos de escala global a un costo inferior al del mercado actual, para eliminar de raíz las barreras de entrada al comercio nacional e internacional.
                            </li>
                            <li className="text-gray-600 text-base leading-[1.7] font-light">
                                <strong className="font-medium text-black">De trabajadores a empresarios de alto patrimonio:</strong> Transformar el talento de nuestra gente en empresas altamente rentables y escalables, para que una nueva generación de fundadores y emprendedores ecuatorianos alcance la independencia financiera y construya patrimonio en los próximos años.
                            </li>
                            <li className="text-gray-600 text-base leading-[1.7] font-light">
                                <strong className="font-medium text-black">Acceso universal:</strong> Plataforma abierta para profesionales, inversionistas, estudiantes, programadores, técnicos y creadores del Ecuador que decidan regirse por el mérito, la disciplina y el trabajo productivo.
                            </li>
                        </ul>
                        <p className="mt-8 text-gray-600 text-base leading-[1.7] font-light">
                            Junto a ustedes haremos más grande a nuestro país. Imagina vivir en un Ecuador organizado, con
                            trabajo, seguridad y sin tanta desigualdad.
                        </p>
                        <p className="mt-6 text-black text-lg md:text-xl font-medium tracking-tight leading-snug">
                            Conectamos ecuatorianos. Creamos oportunidades. Construimos prosperidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

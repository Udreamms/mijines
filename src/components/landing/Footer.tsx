"use client";

import Link from 'next/link';
import Image from 'next/image';
import { sendMetaEvent } from "@/lib/meta-events";
import { LOGIN_URL, STORE_URL, STREAMING_URL } from "@/lib/site-links";
import { DEFAULT_SOCIAL_LINKS, WHATSAPP_GROUP_LINK } from "@/lib/country-socials";

const socials = DEFAULT_SOCIAL_LINKS;

// Comunidad Ecuador: las redes que ya tienen cuenta propia.
const communityLinks = DEFAULT_SOCIAL_LINKS.filter((s) =>
  ["whatsapp", "facebook", "instagram"].includes(s.network)
);

const linkClass = "hover:text-white transition-colors";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Marca */}
          <div className="md:col-span-1">
            <p className="text-white text-2xl font-medium tracking-tight">
              Conectamos ecuatorianos. Creamos oportunidades. Construimos prosperidad.
            </p>
            <div className="mt-8">
              <div className="w-16 h-16 overflow-hidden rounded-full bg-black mb-4">
                <img src="/icons/mijines-logo.webp" loading="lazy" alt="MIJINES | ECUATORIANOS EN ACCIÓN" className="w-full h-full object-cover object-center" />
              </div>
              <p className="text-gray-500 text-sm">
                MIJINES | ECUATORIANOS EN ACCIÓN.
                <br />
                Una nueva generación de ecuatorianos. Un modelo republicano.
                <br />
                Una alianza con los Estados Unidos y los valores del mundo libre.
              </p>
            </div>
          </div>

          {/* La República + Legal */}
          <div className="mb-24">
            <h4 className="font-medium mb-3 text-sm text-slate-200">ECUATORIANOS EN ACCIÓN</h4>
            <ul className="text-gray-400 space-y-2 text-sm mb-4">
              <li><Link href="/#vision" className={linkClass}>Ecuador Resurgirá</Link></li>
              <li><Link href="/#modelo" className={linkClass}>Modelo Republicano</Link></li>
              <li><Link href="/#america" className={linkClass}>Toda la comunidad ecuatoriana somos Uno</Link></li>
              <li><Link href="/#faqs" className={linkClass}>Preguntas Frecuentes</Link></li>
            </ul>

            <h4 className="font-medium mt-16 mb-3 text-sm text-slate-200">Legal</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><Link href="/privacidad" className={linkClass}>Política de Privacidad</Link></li>
              <li><Link href="/terminos" className={linkClass}>Términos y Condiciones</Link></li>
            </ul>
          </div>

          {/* Servicios + Contacto */}
          <div className="mb-24">
            <h4 className="font-medium mb-3 text-sm text-slate-200">Servicios para tu Empresa</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><Link href="/#servicios" className={linkClass}>Creación de tu empresa</Link></li>
              <li><Link href="/#servicios" className={linkClass}>Redes sociales y publicidad</Link></li>
              <li><Link href="/#servicios" className={linkClass}>Sitio web, logo y marca</Link></li>
              <li><Link href="/#servicios" className={linkClass}>Logística</Link></li>
              <li><Link href={STORE_URL} className={linkClass}>Tienda</Link></li>
            </ul>

            <h4 className="font-medium mt-16 mb-3 text-sm text-slate-200">Contacto</h4>
            <ul className="text-gray-400 space-y-2 text-sm mt-auto">
              <li className="flex flex-col gap-1.5 text-xs">
                <span className="block">
                  📞{' '}
                  <a
                    href="https://wa.me/18013586888"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendMetaEvent('Contact', { source: 'Footer WhatsApp' })}
                    className="text-blue-400 hover:underline"
                  >
                    +1 (801) 358-6888
                  </a>
                </span>
                <span className="block">
                  👥{' '}
                  <a
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendMetaEvent('Lead', { source: 'Footer Community' })}
                    className="text-blue-400 hover:underline"
                  >
                    Únete a la comunidad
                  </a>
                </span>
                <span className="text-gray-400 block">📍 Vineyard, Utah</span>
              </li>
            </ul>
          </div>

          {/* Comunidad Ecuador + Plataforma */}
          <div>
            <h4 className="font-medium mb-3 text-sm text-slate-200">Comunidad Ecuador</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              {communityLinks.map((social) => (
                <li key={social.network}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendMetaEvent('Lead', { source: 'Footer Community Link', network: social.label })}
                    className={`${linkClass} inline-flex items-center gap-2`}
                  >
                    <img src="/flags/ec.svg" alt="" loading="lazy" className="w-5 h-[13px] object-cover" />
                    Ecuador en {social.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-medium mt-16 mb-3 text-sm text-slate-200">Plataforma MIJINES</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><Link href={LOGIN_URL} className={`${linkClass} font-medium text-white`}>Ingresa a la plataforma</Link></li>
              <li><Link href={STREAMING_URL} className={linkClass}>MIJINES Streaming</Link></li>
            </ul>
          </div>

          {/* Síguenos */}
          <div>
            <h4 className="font-medium mb-3 text-sm text-slate-200">Síguenos</h4>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendMetaEvent('Lead', { source: 'Footer Social Icon', network: social.label })}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image src={social.imgSrc} alt={social.label} width={32} height={32} style={{ height: 'auto' }} className="rounded-md" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="items-center flex mt-20 flex-col md:flex-row gap-4">
          <Link href="/" className="text-white text-lg font-semibold hover:text-white transition-colors tracking-tighter shrink-0">MIJINES</Link>
          <div className="flex justify-center space-x-6 w-full flex-wrap">
            <Link href="/#vision" className="text-gray-400 hover:text-white transition-colors text-xs">ECUATORIANOS EN ACCIÓN</Link>
            <Link href={STORE_URL} className="text-gray-400 hover:text-white transition-colors text-xs">Tienda</Link>
            <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors text-xs">Privacidad</Link>
            <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors text-xs">Términos</Link>
          </div>
          <div className="text-gray-600 text-[10px] w-full flex flex-col sm:flex-row items-center justify-center md:justify-end gap-1 sm:gap-3">
            <span>
              Página creada con <span className="text-red-500">❤</span> por{' '}
              <a
                href="https://www.luxorintelligence.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Luxor Intelligence LLC
              </a>
            </span>
            <span>© {new Date().getFullYear()} MIJINES. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

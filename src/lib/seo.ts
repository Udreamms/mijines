import type { Metadata } from "next";

export const SITE_URL = "https://www.mijines.org";
export const SITE_NAME = "MIJINES";
export const SITE_TITLE = "MIJINES EN UTAH";

/** URL estable del logo (Google Search favicon + schema.org). */
export const SITE_LOGO_PATH = "/icons/mijines-logo-840.webp";
export const SITE_LOGO_URL = `${SITE_URL}${SITE_LOGO_PATH}`;
export const SITE_FAVICON_URL = "/icons/favicon-mijines.png";

export const DEFAULT_DESCRIPTION =
  "Organización sin fines de lucro que apoya a la comunidad ecuatoriana en los Estados Unidos: te enseñamos a vivir de manera organizada, a conocer y respetar las leyes del país y a apoyarnos unos a otros.";

export const NOINDEX_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: { index: false, follow: false },
};

export type SitemapEntry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

/** Rutas públicas indexables (sitemap + SEO). */
export const PUBLIC_SITEMAP_ROUTES: SitemapEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terminos", changeFrequency: "yearly", priority: 0.3 },
];

const PAGE_SEO: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "Acerca de MIJINES",
    description:
      "Conoce la historia, valores y equipo detrás de MIJINES. Transparencia y acompañamiento en tu proceso hacia Estados Unidos.",
  },
  "/destinos": {
    title: "Destinos en USA",
    description:
      "Explora ciudades y destinos populares para estudiar, trabajar y vivir en Estados Unidos con MIJINES.",
  },
  "/courses": {
    title: "Cursos de Inglés en USA",
    description:
      "Programas de inglés en escuelas aliadas en Estados Unidos. Planifica tu formación con asesoría MIJINES.",
  },
  "/services": {
    title: "Servicios en USA",
    description:
      "Vivienda, banca, SIM, transporte y más. Servicios esenciales para tu llegada a Estados Unidos.",
  },
  "/brochures": {
    title: "Brochures y Guías",
    description:
      "Descarga material informativo y da el primer paso en tu proceso con MIJINES.",
  },
  "/contact": {
    title: "Contáctanos",
    description:
      "Habla con el equipo MIJINES. Resolvemos dudas sobre visas, estudios y tu plan hacia USA.",
  },
  "/partnerships": {
    title: "Alianzas Institucionales",
    description:
      "Universidades y escuelas aliadas. Programas de partnership con MIJINES.",
  },
  "/referrals": {
    title: "Programa de Referidos",
    description:
      "Recomienda MIJINES y gana beneficios. Comparte tu experiencia con quienes sueñan con USA.",
  },
  "/faqs": {
    title: "Preguntas Frecuentes",
    description:
      "Respuestas sobre visas F-1, turismo B1/B2, pagos, procesos y soporte al estudiante.",
  },
  "/privacidad": {
    title: "Política de Privacidad",
    description: "Política de privacidad y tratamiento de datos de MIJINES.",
  },
  "/terminos": {
    title: "Términos y Condiciones",
    description: "Términos y condiciones de uso de los servicios MIJINES.",
  },
  "/visas/student": {
    title: "Visa de Estudiante F-1",
    description:
      "Planes y asesoría para visa de estudiante F-1. Estudia en USA con acompañamiento experto MIJINES.",
  },
  "/visas/tourist": {
    title: "Visa de Turismo B1/B2",
    description:
      "Asesoría para visa de turismo B1/B2. Prepara tu viaje a Estados Unidos con confianza.",
  },
};

function canonicalUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function pageMetadata(
  path: string,
  options?: { noindex?: boolean }
): Metadata {
  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const entry = PAGE_SEO[normalized] ?? PAGE_SEO["/"];
  const url = canonicalUrl(normalized === "/" ? "" : normalized);
  const noindex = options?.noindex ?? false;

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url,
      siteName: SITE_NAME,
      locale: "es_US",
      type: "website",
      images: [
        {
          url: SITE_LOGO_PATH,
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
    robots: noindex ? NOINDEX_ROBOTS : { index: true, follow: true },
  };
}

export function noindexMetadata(title: string): Metadata {
  return {
    title,
    robots: NOINDEX_ROBOTS,
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: SITE_LOGO_PATH,
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
    icons: {
    icon: [
      { url: SITE_FAVICON_URL, type: "image/png", sizes: "48x48" },
      { url: SITE_FAVICON_URL, type: "image/png", sizes: "192x192" },
      { url: SITE_FAVICON_URL, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: SITE_FAVICON_URL, type: "image/png", sizes: "180x180" }],
    shortcut: SITE_FAVICON_URL,
  },
};

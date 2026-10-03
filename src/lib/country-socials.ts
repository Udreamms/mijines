export type SocialNetwork = "facebook" | "instagram" | "whatsapp" | "x" | "youtube" | "tiktok";

export type SocialLink = {
  network: SocialNetwork;
  label: string;
  imgSrc: string;
  href: string;
};

/** Enlaces generales: se usan en cualquier país que no tenga su propio enlace. */
export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LgTp9ENXaaYEmcCC8OPrKT";

// X, YouTube y TikTok aún no tienen cuenta propia: por ahora llevan al grupo de WhatsApp.
export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { network: "facebook", label: "Facebook", imgSrc: "/assets/f.jpg", href: "https://www.facebook.com/profile.php?id=100066382284647" },
  { network: "instagram", label: "Instagram", imgSrc: "/assets/i.jpg", href: "https://www.instagram.com/mijinesenutah" },
  { network: "whatsapp", label: "WhatsApp", imgSrc: "/assets/w.jpg", href: WHATSAPP_GROUP_LINK },
  { network: "x", label: "X", imgSrc: "/assets/x.jpg", href: WHATSAPP_GROUP_LINK },
  { network: "youtube", label: "YouTube", imgSrc: "/assets/y.jpg", href: WHATSAPP_GROUP_LINK },
  { network: "tiktok", label: "TikTok", imgSrc: "/assets/t.jpg", href: WHATSAPP_GROUP_LINK },
];

/**
 * Enlaces propios de cada país (código ISO en minúsculas, ver latam-countries.ts).
 * Solo pon las redes que cambian; las demás usan el enlace general.
 *
 * Ejemplo:
 *   co: {
 *     whatsapp: "https://chat.whatsapp.com/GRUPO-COLOMBIA",
 *     facebook: "https://www.facebook.com/groups/pormi-colombia",
 *   },
 */
export const COUNTRY_SOCIAL_LINKS: Record<string, Partial<Record<SocialNetwork, string>>> = {};

export function getCountrySocialLinks(countryCode: string): SocialLink[] {
  const overrides = COUNTRY_SOCIAL_LINKS[countryCode] ?? {};
  return DEFAULT_SOCIAL_LINKS.map((link) => {
    const custom = overrides[link.network];
    if (custom) return { ...link, href: custom };
    return link;
  });
}

/** Grupo de WhatsApp de la cápsula "Tengo preguntas antes de empezar". */
export const DEFAULT_QUESTIONS_LINK = WHATSAPP_GROUP_LINK;

/** Grupo propio de cada país (código ISO en minúsculas); los demás usan DEFAULT_QUESTIONS_LINK. */
export const COUNTRY_QUESTIONS_LINKS: Record<string, string> = {};

export function getCountryQuestionsLink(countryCode: string): string {
  return COUNTRY_QUESTIONS_LINKS[countryCode] ?? DEFAULT_QUESTIONS_LINK;
}

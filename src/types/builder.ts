export interface SiteConfig {
  siteName: string;
  siteType: string;
  colorScheme: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: string[];
  style: string;
}

export const SITE_TYPES = [
  { value: 'landing', label: 'Landing Page' },
  { value: 'portfolio', label: 'Portfólio' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'blog', label: 'Blog' },
  { value: 'saas', label: 'SaaS' },
  { value: 'restaurant', label: 'Restaurante' },
];

export const COLOR_SCHEMES = [
  { value: 'violet', label: 'Violeta', colors: ['#7c3aed', '#a78bfa', '#1e1b4b'] },
  { value: 'emerald', label: 'Esmeralda', colors: ['#10b981', '#6ee7b7', '#064e3b'] },
  { value: 'rose', label: 'Rosé', colors: ['#f43f5e', '#fda4af', '#4c0519'] },
  { value: 'amber', label: 'Âmbar', colors: ['#f59e0b', '#fcd34d', '#451a03'] },
  { value: 'cyan', label: 'Ciano', colors: ['#06b6d4', '#67e8f9', '#083344'] },
  { value: 'slate', label: 'Cinza', colors: ['#64748b', '#cbd5e1', '#0f172a'] },
];

export const SECTIONS = [
  { value: 'hero', label: 'Hero' },
  { value: 'features', label: 'Funcionalidades' },
  { value: 'about', label: 'Sobre' },
  { value: 'pricing', label: 'Preços' },
  { value: 'testimonials', label: 'Depoimentos' },
  { value: 'gallery', label: 'Galeria' },
  { value: 'contact', label: 'Contato' },
  { value: 'faq', label: 'FAQ' },
  { value: 'cta', label: 'Call to Action' },
  { value: 'team', label: 'Equipe' },
];

export const STYLES = [
  { value: 'modern', label: 'Moderno' },
  { value: 'minimal', label: 'Minimalista' },
  { value: 'bold', label: 'Ousado' },
  { value: 'elegant', label: 'Elegante' },
];

export const DEFAULT_CONFIG: SiteConfig = {
  siteName: 'Meu Site',
  siteType: 'landing',
  colorScheme: 'violet',
  heroTitle: 'Construa algo incrível',
  heroSubtitle: 'A plataforma que transforma suas ideias em realidade digital.',
  sections: ['hero', 'features', 'about', 'cta'],
  style: 'modern',
};

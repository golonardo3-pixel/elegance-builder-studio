import { SiteConfig, COLOR_SCHEMES } from '@/types/builder';
import { Star, Zap, Shield, ArrowRight, Mail, Phone, MapPin, Users, ChevronDown, Image } from 'lucide-react';

interface SitePreviewProps {
  config: SiteConfig;
}

const getColors = (scheme: string) => {
  const found = COLOR_SCHEMES.find(c => c.value === scheme);
  return found?.colors || COLOR_SCHEMES[0].colors;
};

const getStyleClasses = (style: string) => {
  switch (style) {
    case 'minimal': return { rounded: 'rounded-none', font: 'tracking-wide', spacing: 'space-y-2' };
    case 'bold': return { rounded: 'rounded-2xl', font: 'tracking-tight font-black', spacing: 'space-y-4' };
    case 'elegant': return { rounded: 'rounded-xl', font: 'tracking-normal italic', spacing: 'space-y-3' };
    default: return { rounded: 'rounded-lg', font: 'tracking-tight', spacing: 'space-y-3' };
  }
};

export const SitePreview = ({ config }: SitePreviewProps) => {
  const [primary, secondary, dark] = getColors(config.colorScheme);
  const s = getStyleClasses(config.style);

  const renderNav = () => (
    <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: `1px solid ${primary}22` }}>
      <span className="text-sm font-bold" style={{ color: primary }}>{config.siteName}</span>
      <div className="flex gap-3 text-[10px]" style={{ color: secondary }}>
        <span>Início</span><span>Sobre</span><span>Contato</span>
      </div>
    </div>
  );

  const renderHero = () => (
    <div className="px-4 py-8 text-center" style={{ background: `linear-gradient(135deg, ${dark}, ${primary}15)` }}>
      <h1 className={`text-lg font-bold mb-2 ${s.font}`} style={{ color: '#fff' }}>{config.heroTitle}</h1>
      <p className="text-[10px] mb-4 opacity-70" style={{ color: secondary }}>{config.heroSubtitle}</p>
      <div className="flex gap-2 justify-center">
        <button className={`px-3 py-1.5 text-[10px] font-semibold text-white ${s.rounded}`} style={{ background: primary }}>
          Começar agora
        </button>
        <button className={`px-3 py-1.5 text-[10px] font-semibold ${s.rounded}`} style={{ color: primary, border: `1px solid ${primary}44` }}>
          Saiba mais
        </button>
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="px-4 py-6" style={{ background: `${dark}` }}>
      <h2 className={`text-sm font-bold text-center mb-4 ${s.font}`} style={{ color: '#fff' }}>Funcionalidades</h2>
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: <Zap size={14} />, title: 'Rápido', desc: 'Performance otimizada' },
          { icon: <Shield size={14} />, title: 'Seguro', desc: 'Proteção total' },
          { icon: <Star size={14} />, title: 'Qualidade', desc: 'Alto padrão' },
          { icon: <Users size={14} />, title: 'Suporte', desc: 'Atendimento 24/7' },
        ].map((f, i) => (
          <div key={i} className={`p-2.5 ${s.rounded}`} style={{ background: `${primary}11`, border: `1px solid ${primary}22` }}>
            <div className="mb-1" style={{ color: primary }}>{f.icon}</div>
            <div className="text-[10px] font-semibold text-white">{f.title}</div>
            <div className="text-[8px] opacity-50 text-white">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="px-4 py-6" style={{ background: `${primary}08` }}>
      <h2 className={`text-sm font-bold mb-2 ${s.font}`} style={{ color: '#fff' }}>Sobre nós</h2>
      <p className="text-[9px] opacity-60 text-white leading-relaxed">
        Somos uma empresa dedicada a criar soluções digitais inovadoras que transformam negócios e conectam pessoas ao futuro da tecnologia.
      </p>
      <div className="flex gap-4 mt-3">
        {[['500+', 'Clientes'], ['99%', 'Satisfação'], ['24/7', 'Suporte']].map(([n, l], i) => (
          <div key={i} className="text-center">
            <div className="text-sm font-bold" style={{ color: primary }}>{n}</div>
            <div className="text-[8px] opacity-50 text-white">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPricing = () => (
    <div className="px-4 py-6" style={{ background: dark }}>
      <h2 className={`text-sm font-bold text-center mb-3 ${s.font}`} style={{ color: '#fff' }}>Planos</h2>
      <div className="flex gap-2">
        {[
          { name: 'Básico', price: 'R$29', highlight: false },
          { name: 'Pro', price: 'R$79', highlight: true },
          { name: 'Enterprise', price: 'R$199', highlight: false },
        ].map((p, i) => (
          <div key={i} className={`flex-1 p-2 text-center ${s.rounded}`}
            style={{
              background: p.highlight ? primary : `${primary}11`,
              border: `1px solid ${p.highlight ? primary : `${primary}22`}`,
            }}>
            <div className="text-[8px] opacity-70 text-white">{p.name}</div>
            <div className="text-xs font-bold text-white my-1">{p.price}</div>
            <div className="text-[7px] opacity-50 text-white">/mês</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTestimonials = () => (
    <div className="px-4 py-6" style={{ background: `${primary}08` }}>
      <h2 className={`text-sm font-bold text-center mb-3 ${s.font}`} style={{ color: '#fff' }}>Depoimentos</h2>
      <div className={`p-3 ${s.rounded}`} style={{ background: `${primary}11`, border: `1px solid ${primary}22` }}>
        <p className="text-[9px] italic opacity-70 text-white mb-2">"Transformou completamente nosso negócio. Recomendo a todos!"</p>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full" style={{ background: primary }} />
          <div>
            <div className="text-[9px] font-semibold text-white">Maria Silva</div>
            <div className="text-[7px] opacity-50 text-white">CEO, TechCo</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="px-4 py-6" style={{ background: dark }}>
      <h2 className={`text-sm font-bold text-center mb-3 ${s.font}`} style={{ color: '#fff' }}>Galeria</h2>
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`aspect-square ${s.rounded} flex items-center justify-center`}
            style={{ background: `${primary}${15 + i * 5}`, border: `1px solid ${primary}22` }}>
            <Image size={12} style={{ color: primary, opacity: 0.5 }} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="px-4 py-6" style={{ background: `${primary}08` }}>
      <h2 className={`text-sm font-bold mb-3 ${s.font}`} style={{ color: '#fff' }}>Contato</h2>
      <div className={`${s.spacing} text-[9px]`}>
        {[
          { icon: <Mail size={10} />, text: 'contato@exemplo.com' },
          { icon: <Phone size={10} />, text: '(11) 99999-9999' },
          { icon: <MapPin size={10} />, text: 'São Paulo, SP' },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-2 text-white opacity-60">
            <span style={{ color: primary }}>{c.icon}</span>{c.text}
          </div>
        ))}
      </div>
    </div>
  );

  const renderFaq = () => (
    <div className="px-4 py-6" style={{ background: dark }}>
      <h2 className={`text-sm font-bold text-center mb-3 ${s.font}`} style={{ color: '#fff' }}>FAQ</h2>
      {['Como funciona?', 'Qual o prazo?', 'Tem garantia?'].map((q, i) => (
        <div key={i} className={`flex items-center justify-between p-2 mb-1.5 ${s.rounded}`}
          style={{ background: `${primary}11`, border: `1px solid ${primary}22` }}>
          <span className="text-[9px] text-white">{q}</span>
          <ChevronDown size={10} style={{ color: primary }} />
        </div>
      ))}
    </div>
  );

  const renderCta = () => (
    <div className="px-4 py-8 text-center" style={{ background: `linear-gradient(135deg, ${primary}33, ${dark})` }}>
      <h2 className={`text-sm font-bold mb-2 ${s.font}`} style={{ color: '#fff' }}>Pronto para começar?</h2>
      <p className="text-[9px] opacity-60 text-white mb-3">Junte-se a milhares de clientes satisfeitos.</p>
      <button className={`px-4 py-1.5 text-[10px] font-semibold text-white ${s.rounded} inline-flex items-center gap-1`}
        style={{ background: primary }}>
        Começar agora <ArrowRight size={10} />
      </button>
    </div>
  );

  const renderTeam = () => (
    <div className="px-4 py-6" style={{ background: `${primary}08` }}>
      <h2 className={`text-sm font-bold text-center mb-3 ${s.font}`} style={{ color: '#fff' }}>Equipe</h2>
      <div className="flex gap-3 justify-center">
        {['Ana', 'Pedro', 'Lucia'].map((name, i) => (
          <div key={i} className="text-center">
            <div className={`w-8 h-8 mx-auto mb-1 ${s.rounded}`} style={{ background: `${primary}${30 + i * 15}` }} />
            <div className="text-[9px] font-semibold text-white">{name}</div>
            <div className="text-[7px] opacity-50 text-white">Dev</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFooter = () => (
    <div className="px-4 py-4 text-center" style={{ borderTop: `1px solid ${primary}22`, background: dark }}>
      <span className="text-[8px] opacity-40 text-white">© 2026 {config.siteName}. Todos os direitos reservados.</span>
    </div>
  );

  const sectionMap: Record<string, () => JSX.Element> = {
    hero: renderHero,
    features: renderFeatures,
    about: renderAbout,
    pricing: renderPricing,
    testimonials: renderTestimonials,
    gallery: renderGallery,
    contact: renderContact,
    faq: renderFaq,
    cta: renderCta,
    team: renderTeam,
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border" style={{ background: dark }}>
      {renderNav()}
      {config.sections.map(sec => sectionMap[sec]?.())}
      {renderFooter()}
    </div>
  );
};

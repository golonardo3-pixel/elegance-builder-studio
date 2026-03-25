import { SiteConfig, SITE_TYPES, COLOR_SCHEMES, SECTIONS, STYLES } from '@/types/builder';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Palette, Layout, Type, Layers, Sparkles } from 'lucide-react';

interface BuilderSidebarProps {
  config: SiteConfig;
  onChange: (config: SiteConfig) => void;
}

export const BuilderSidebar = ({ config, onChange }: BuilderSidebarProps) => {
  const update = (partial: Partial<SiteConfig>) => onChange({ ...config, ...partial });

  const toggleSection = (value: string) => {
    const sections = config.sections.includes(value)
      ? config.sections.filter(s => s !== value)
      : [...config.sections, value];
    update({ sections });
  };

  return (
    <div className="h-full overflow-y-auto p-4 space-y-6">
      {/* Site Name */}
      <div className="space-y-2">
        <Label className="text-xs flex items-center gap-1.5 text-muted-foreground uppercase tracking-wider">
          <Type size={12} /> Nome do Site
        </Label>
        <Input
          value={config.siteName}
          onChange={e => update({ siteName: e.target.value })}
          className="bg-secondary border-border text-sm"
          placeholder="Nome do seu site"
        />
      </div>

      {/* Site Type */}
      <div className="space-y-2">
        <Label className="text-xs flex items-center gap-1.5 text-muted-foreground uppercase tracking-wider">
          <Layout size={12} /> Tipo de Site
        </Label>
        <div className="grid grid-cols-2 gap-1.5">
          {SITE_TYPES.map(t => (
            <button key={t.value} onClick={() => update({ siteType: t.value })}
              className={`px-2.5 py-2 text-xs rounded-lg border transition-all ${
                config.siteType === t.value
                  ? 'bg-primary/20 border-primary text-primary-foreground'
                  : 'bg-secondary border-border text-muted-foreground hover:border-primary/40'
              }`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Scheme */}
      <div className="space-y-2">
        <Label className="text-xs flex items-center gap-1.5 text-muted-foreground uppercase tracking-wider">
          <Palette size={12} /> Cores
        </Label>
        <div className="grid grid-cols-3 gap-1.5">
          {COLOR_SCHEMES.map(c => (
            <button key={c.value} onClick={() => update({ colorScheme: c.value })}
              className={`p-2 rounded-lg border transition-all text-center ${
                config.colorScheme === c.value
                  ? 'border-primary glow-primary'
                  : 'border-border hover:border-primary/40'
              }`}>
              <div className="flex gap-0.5 justify-center mb-1">
                {c.colors.map((color, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ background: color }} />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Style */}
      <div className="space-y-2">
        <Label className="text-xs flex items-center gap-1.5 text-muted-foreground uppercase tracking-wider">
          <Sparkles size={12} /> Estilo
        </Label>
        <div className="grid grid-cols-2 gap-1.5">
          {STYLES.map(st => (
            <button key={st.value} onClick={() => update({ style: st.value })}
              className={`px-2.5 py-2 text-xs rounded-lg border transition-all ${
                config.style === st.value
                  ? 'bg-primary/20 border-primary text-primary-foreground'
                  : 'bg-secondary border-border text-muted-foreground hover:border-primary/40'
              }`}>
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="space-y-2">
        <Label className="text-xs flex items-center gap-1.5 text-muted-foreground uppercase tracking-wider">
          <Type size={12} /> Conteúdo Hero
        </Label>
        <Input
          value={config.heroTitle}
          onChange={e => update({ heroTitle: e.target.value })}
          className="bg-secondary border-border text-sm"
          placeholder="Título principal"
        />
        <Input
          value={config.heroSubtitle}
          onChange={e => update({ heroSubtitle: e.target.value })}
          className="bg-secondary border-border text-sm"
          placeholder="Subtítulo"
        />
      </div>

      {/* Sections */}
      <div className="space-y-2">
        <Label className="text-xs flex items-center gap-1.5 text-muted-foreground uppercase tracking-wider">
          <Layers size={12} /> Seções
        </Label>
        <div className="flex flex-wrap gap-1.5">
          {SECTIONS.map(sec => (
            <Badge key={sec.value} variant={config.sections.includes(sec.value) ? 'default' : 'outline'}
              className={`cursor-pointer text-[10px] transition-all ${
                config.sections.includes(sec.value)
                  ? 'bg-primary hover:bg-primary/80'
                  : 'hover:border-primary/40'
              }`}
              onClick={() => toggleSection(sec.value)}>
              {sec.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

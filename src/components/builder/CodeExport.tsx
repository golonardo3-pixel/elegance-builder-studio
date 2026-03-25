import { SiteConfig, COLOR_SCHEMES } from '@/types/builder';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface CodeExportProps {
  config: SiteConfig;
}

export const CodeExport = ({ config }: CodeExportProps) => {
  const [copied, setCopied] = useState(false);
  const colors = COLOR_SCHEMES.find(c => c.value === config.colorScheme)?.colors || [];

  const generateHTML = () => {
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.siteName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: ${colors[2]}; color: #fff; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
    .hero { padding: 6rem 0; text-align: center; background: linear-gradient(135deg, ${colors[2]}, ${colors[0]}22); }
    .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
    .hero p { opacity: 0.7; margin-bottom: 2rem; }
    .btn { padding: 0.75rem 2rem; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; background: ${colors[0]}; color: #fff; }
    nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; border-bottom: 1px solid ${colors[0]}22; }
    section { padding: 4rem 2rem; }
    footer { text-align: center; padding: 2rem; border-top: 1px solid ${colors[0]}22; opacity: 0.4; font-size: 0.8rem; }
  </style>
</head>
<body>
  <nav>
    <strong style="color:${colors[0]}">${config.siteName}</strong>
    <div style="display:flex;gap:1.5rem;color:${colors[1]}">
      <a href="#" style="color:inherit;text-decoration:none">Início</a>
      <a href="#" style="color:inherit;text-decoration:none">Sobre</a>
      <a href="#" style="color:inherit;text-decoration:none">Contato</a>
    </div>
  </nav>
  <div class="hero">
    <div class="container">
      <h1>${config.heroTitle}</h1>
      <p>${config.heroSubtitle}</p>
      <button class="btn">Começar agora</button>
    </div>
  </div>
  <footer>© 2026 ${config.siteName}. Todos os direitos reservados.</footer>
</body>
</html>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateHTML());
    setCopied(true);
    toast.success('Código copiado!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Código HTML</h3>
        <Button size="sm" variant="outline" onClick={handleCopy} className="text-xs gap-1.5">
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copiado!' : 'Copiar'}
        </Button>
      </div>
      <pre className="bg-secondary rounded-lg p-3 text-[10px] text-muted-foreground overflow-auto max-h-[300px] border border-border">
        <code>{generateHTML()}</code>
      </pre>
    </div>
  );
};

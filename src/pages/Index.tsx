import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteConfig, DEFAULT_CONFIG } from '@/types/builder';
import { BuilderSidebar } from '@/components/builder/BuilderSidebar';
import { SitePreview } from '@/components/builder/SitePreview';
import { CodeExport } from '@/components/builder/CodeExport';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Code, PanelLeft, Sparkles } from 'lucide-react';

const Index = () => {
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_CONFIG);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 h-12 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}>
            <PanelLeft size={16} />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <Sparkles size={14} className="text-primary-foreground" />
            </div>
            <h1 className="text-sm font-bold tracking-tight text-foreground">
              Elegance<span className="text-primary">Builder</span>
            </h1>
          </div>
        </div>
        <div className="text-[10px] text-muted-foreground hidden sm:block">
          Gerador automático de sites
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-r border-border bg-card overflow-hidden shrink-0 hidden lg:block"
            >
              <BuilderSidebar config={config} onChange={setConfig} />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
            >
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
              <motion.div
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-12 bottom-0 w-[300px] bg-card border-r border-border z-50"
              >
                <BuilderSidebar config={config} onChange={setConfig} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Area */}
        <main className="flex-1 overflow-hidden">
          <Tabs defaultValue="preview" className="h-full flex flex-col">
            <div className="px-4 pt-3 shrink-0">
              <TabsList className="bg-secondary">
                <TabsTrigger value="preview" className="text-xs gap-1.5">
                  <Eye size={12} /> Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="text-xs gap-1.5">
                  <Code size={12} /> Código
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="preview" className="flex-1 overflow-auto p-4 mt-0">
              <div className="max-w-sm mx-auto">
                <motion.div
                  key={JSON.stringify(config)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SitePreview config={config} />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="flex-1 overflow-auto p-4 mt-0">
              <div className="max-w-2xl mx-auto">
                <CodeExport config={config} />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Index;

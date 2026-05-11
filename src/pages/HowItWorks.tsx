import { ArrowRight, Database, Bot, BarChart } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 py-20">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl font-bold tracking-tight">System Architecture</h1>
        <p className="text-xl text-muted-foreground">How SignalStack processes messy inputs into operational truth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-16">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10 hidden md:block"></div>
        
        <div className="bg-card border rounded-xl p-8 flex flex-col items-center text-center relative">
          <div className="h-16 w-16 bg-background border flex items-center justify-center rounded-full mb-6 absolute -top-8 shadow-sm">
            <Database className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-heading text-xl font-bold mb-2 mt-4">1. Ingestion</h3>
          <p className="text-muted-foreground text-sm">We aggregate unstructured text from your existing operational tools via CSV drops or our API hooks.</p>
        </div>

        <div className="bg-card border rounded-xl p-8 flex flex-col items-center text-center relative shadow-lg ring-1 ring-primary/20">
          <div className="h-16 w-16 bg-background border border-primary flex items-center justify-center rounded-full mb-6 absolute -top-8 shadow-lg">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-heading text-xl font-bold mb-2 mt-4">2. Semantic Triangulation</h3>
          <p className="text-muted-foreground text-sm">Our Gemini-powered engine maps entities across datasets, specifically hunting for contradictions and expectation mismatches rather than generic summaries.</p>
        </div>

        <div className="bg-card border rounded-xl p-8 flex flex-col items-center text-center relative">
          <div className="h-16 w-16 bg-background border flex items-center justify-center rounded-full mb-6 absolute -top-8 shadow-sm">
            <BarChart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-heading text-xl font-bold mb-2 mt-4">3. Structured Reality</h3>
          <p className="text-muted-foreground text-sm">We render the insights into deterministic risk indicators, timelines, and heatmaps that expose operational vulnerabilities.</p>
        </div>
      </div>
    </div>
  );
}

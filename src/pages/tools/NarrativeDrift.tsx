import { useState } from 'react';
import { UploadDropzone } from '../../components/UploadDropzone';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Activity, AlertTriangle, ArrowRight, Download, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MOCK_DATA = [
  { quarter: 'Q1', confidence: 92, drift: 2, clarity: 88 },
  { quarter: 'Q2', confidence: 85, drift: 8, clarity: 80 },
  { quarter: 'Q3', confidence: 76, drift: 18, clarity: 72 },
  { quarter: 'Q4', confidence: 64, drift: 35, clarity: 55 },
];

export default function NarrativeDrift() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    // Simulate AI processing
    setTimeout(() => {
      setAnalyzing(false);
      setResults(true);
    }, 3000);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">Narrative Drift Tracker</h1>
        <p className="text-muted-foreground">Detect subtle wording shifts across earnings reports, presentations, and filings.</p>
      </div>

      <AnimatePresence mode="wait">
        {!analyzing && !results && (
          <motion.div 
            key="upload"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card className="shadow-lg border-primary/20 bg-muted/10">
              <CardHeader>
                <CardTitle>Dataset Upload</CardTitle>
                <CardDescription>Upload sequential documents to track narrative changes over time.</CardDescription>
              </CardHeader>
              <CardContent>
                <UploadDropzone onUpload={handleUpload} maxFiles={4} label="Upload Q1-Q4 Reports" />
              </CardContent>
            </Card>

            <Card>
               <CardHeader>
                 <CardTitle>Analysis Parameters</CardTitle>
                 <CardDescription>Select what the AI should focus on during extraction.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-4">
                 {['Confidence Deterioration', 'Strategic Pivot Signals', 'Defensive Posturing', 'Uncertainty Lexicon'].map((item) => (
                   <div key={item} className="flex items-center space-x-2 bg-muted/40 p-3 rounded-lg border">
                     <input type="checkbox" id={item} className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" defaultChecked />
                     <label htmlFor={item} className="text-sm font-medium leading-none pb-0.5">{item}</label>
                   </div>
                 ))}
               </CardContent>
               <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => handleUpload()}>
                    Load Sample SEC Filings (Q1-Q4)
                  </Button>
               </CardFooter>
            </Card>
          </motion.div>
        )}

        {analyzing && (
           <motion.div
             key="analyzing"
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="flex flex-col items-center justify-center py-32 space-y-6"
           >
             <div className="relative">
               <div className="absolute inset-0 rounded-full blur-xl bg-primary/20 animate-pulse"></div>
               <div className="h-20 w-20 bg-card border shadow-xl rounded-2xl flex items-center justify-center relative z-10 animate-bounce">
                  <Bot className="h-10 w-10 text-primary" />
               </div>
             </div>
             <div className="text-center space-y-2">
               <h3 className="text-2xl font-heading font-semibold">Analyzing Narrative Patterns...</h3>
               <p className="text-muted-foreground animate-pulse">Extracting linguistic markers across 4 documents</p>
             </div>
           </motion.div>
        )}

        {results && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center bg-muted/30 p-4 rounded-xl border">
               <div className="flex items-center gap-3">
                 <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600">
                    <AlertTriangle className="h-5 w-5" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-orange-700 dark:text-orange-400">High Risk: Narrative Drift Detected</h4>
                   <p className="text-sm text-muted-foreground">Confidence score dropped 28 points between Q1 and Q4.</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <Button variant="outline" size="sm" onClick={() => setResults(false)}>Reset</Button>
                 <Button size="sm"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <Card className="md:col-span-2">
                 <CardHeader>
                   <CardTitle>Confidence vs. Drift Trajectory</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <div className="h-[300px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={MOCK_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorDrift" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-destructive)" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="var(--color-destructive)" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} />
                         <XAxis dataKey="quarter" />
                         <YAxis />
                         <RechartsTooltip />
                         <Area type="monotone" dataKey="confidence" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorConfidence)" />
                         <Area type="monotone" dataKey="drift" stroke="var(--color-destructive)" fillOpacity={1} fill="url(#colorDrift)" />
                       </AreaChart>
                     </ResponsiveContainer>
                   </div>
                 </CardContent>
               </Card>

               <Card className="flex flex-col">
                 <CardHeader>
                   <CardTitle>Key Linguistic Shifts</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-1">
                   <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-slate-300 text-slate-500 group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        </div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-card border rounded-lg p-3 shadow-sm">
                           <div className="text-xs font-bold text-muted-foreground mb-1">Q1</div>
                           <div className="text-sm font-medium">"We will achieve..."</div>
                        </div>
                     </div>
                     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-slate-300 text-slate-500 group-[.is-active]:bg-amber-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        </div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-card border rounded-lg p-3 shadow-sm">
                           <div className="text-xs font-bold text-muted-foreground mb-1">Q2</div>
                           <div className="text-sm font-medium">"We intend to achieve..."</div>
                        </div>
                     </div>
                     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-slate-300 text-slate-500 group-[.is-active]:bg-orange-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        </div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-card border rounded-lg p-3 shadow-sm">
                           <div className="text-xs font-bold text-muted-foreground mb-1">Q4</div>
                           <div className="text-sm font-medium">"We are exploring paths to..."</div>
                        </div>
                     </div>
                   </div>
                 </CardContent>
               </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Inference Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p>The analysis indicates a <strong>significant regression in certainty</strong> regarding "Project Alpha" deliverables. While Q1 documentation used 85% declarative statements (establishing guarantees), Q4 documentation has shifted to 62% exploratory phrasing (establishing possibilities).</p>
                  <p><strong>Recommendation:</strong> Escalate to Product Leadership to confirm if there are uncommunicated technical blockers causing this narrative defensive posturing.</p>
                </div>
              </CardContent>
            </Card>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

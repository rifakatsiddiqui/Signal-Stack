import { useState } from 'react';
import { UploadDropzone } from '../../components/UploadDropzone';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import { MessageSquareWarning, Download, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CLUSTER_DATA = [
  { name: 'Sizing (Runs Small)', count: 420, color: '#f97316' },
  { name: 'Expectation Mismatch', count: 284, color: '#8b5cf6' },
  { name: 'Material Quality', count: 156, color: '#3b82f6' },
  { name: 'Shipping Delay', count: 98, color: '#10b981' },
];

export default function RefundDecoder() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults(true);
    }, 2500);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">Refund Pattern Decoder</h1>
        <p className="text-muted-foreground">Analyze qualitative return reasons to find operational root causes.</p>
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
                <CardTitle>Refund Tickets Upload</CardTitle>
                <CardDescription>Upload CSV exports from Zendesk, Gorgias, or Intercom.</CardDescription>
              </CardHeader>
              <CardContent>
                <UploadDropzone onUpload={handleUpload} maxFiles={1} accept=".csv,.json" label="Upload Tickets Data" />
              </CardContent>
            </Card>

            <Card>
               <CardHeader>
                 <CardTitle>Clustering Configuration</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Primary Focus</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Operational Failures</option>
                      <option>Product Descriptions</option>
                      <option>UX Friction</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sensitivity Level</label>
                    <input type="range" className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Broad Clusters</span>
                      <span>Hyper-Specific</span>
                    </div>
                  </div>
               </CardContent>
               <CardFooter>
                  <Button variant="secondary" className="w-full" onClick={() => handleUpload()}>
                    Load Sample E-commerce Dataset
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
             <Loader2 className="h-16 w-16 text-purple-500 animate-spin" />
             <div className="text-center space-y-2">
               <h3 className="text-2xl font-heading font-semibold">Triangulating Complaint Data...</h3>
               <p className="text-muted-foreground">Parsing 1,248 qualitative tickets into vector clusters.</p>
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
                 <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600">
                    <Sparkles className="h-5 w-5" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-purple-700 dark:text-purple-400">Root Cause Identified</h4>
                   <p className="text-sm text-muted-foreground">42% of refunds stem from misleading product imagery, not quality.</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <Button variant="outline" size="sm" onClick={() => setResults(false)}>Reset</Button>
                 <Button size="sm"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <Card className="lg:col-span-2">
                 <CardHeader>
                   <CardTitle>Complaint Clustering Vector Map Component Volume</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <div className="h-[350px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={CLUSTER_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                         <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                         <XAxis type="number" />
                         <YAxis dataKey="name" type="category" width={150} tick={{fontSize: 12}} />
                         <RechartsTooltip cursor={{fill: 'transparent'}} />
                         <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={32}>
                            {CLUSTER_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                         </Bar>
                       </BarChart>
                     </ResponsiveContainer>
                   </div>
                 </CardContent>
               </Card>

               <Card className="flex flex-col">
                 <CardHeader>
                   <CardTitle>Emotional Heatmap</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-1 space-y-4">
                    <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-orange-700 dark:text-orange-400">Frustration</span>
                        <span className="text-sm font-bold">45%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">High correlation with "Sizing" cluster. Often mentions "waste of time".</p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-purple-700 dark:text-purple-400">Disappointment</span>
                        <span className="text-sm font-bold">38%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">High correlation with "Expectation Mismatch" cluster. Mentions "photos looked different".</p>
                    </div>
                    <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-blue-700 dark:text-blue-400">Confusion</span>
                        <span className="text-sm font-bold">12%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Relates to return policy ambiguity.</p>
                    </div>
                 </CardContent>
               </Card>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

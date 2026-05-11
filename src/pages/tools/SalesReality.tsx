import { useState } from 'react';
import { UploadDropzone } from '../../components/UploadDropzone';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Shield, ArrowRightLeft, CheckCircle2, TrendingUp, Download, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Progress } from '../../components/ui/progress';

export default function SalesReality() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults(true);
    }, 2800);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">Sales Reality Gap Detector</h1>
        <p className="text-muted-foreground">Compare sales promises against customer support realities to identify expectation gaps before churn.</p>
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
                <CardTitle>Sales Transcripts</CardTitle>
                <CardDescription>Upload Gong/Gong/Zoom call transcripts or CRM notes.</CardDescription>
              </CardHeader>
              <CardContent>
                <UploadDropzone onUpload={() => {}} maxFiles={1} accept=".csv,.json,.txt" label="Upload Sales Data" />
              </CardContent>
            </Card>

            <Card className="shadow-lg border-primary/20 bg-muted/10">
              <CardHeader>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>Upload Zendesk/Intercom post-onboarding tickets.</CardDescription>
              </CardHeader>
              <CardContent>
                <UploadDropzone onUpload={handleUpload} maxFiles={1} accept=".csv,.json" label="Upload Support Data" />
              </CardContent>
            </Card>
            
            <div className="md:col-span-2">
                <Button variant="secondary" className="w-full shadow-md" size="lg" onClick={handleUpload}>
                    Load Sample B2B SaaS Dataset
                </Button>
            </div>
          </motion.div>
        )}

        {analyzing && (
           <motion.div
             key="analyzing"
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="flex flex-col items-center justify-center py-32 space-y-6"
           >
             <div className="flex items-center gap-8">
                 <Shield className="h-12 w-12 text-blue-500 animate-pulse" />
                 <ArrowRightLeft className="h-8 w-8 text-muted-foreground" />
                 <MessageSquareIcon className="h-12 w-12 text-orange-500 animate-pulse" />
             </div>
             <div className="text-center space-y-2">
               <h3 className="text-2xl font-heading font-semibold">Measuring Reality Gap...</h3>
               <p className="text-muted-foreground">Cross-referencing 200 sales promises with 1,500 support complaints.</p>
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
                 <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <TrendingUp className="h-5 w-5" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-blue-700 dark:text-blue-400">High Risk Cohort Detected</h4>
                   <p className="text-sm text-muted-foreground">"Enterprise Sync" feature accounts for 68% of alignment gaps.</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <Button variant="outline" size="sm" onClick={() => setResults(false)}>Reset</Button>
                 <Button size="sm"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Top Contradiction Clusters</CardTitle>
                        <CardDescription>Where sales narrative breaks during actual product usage.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        
                        <div className="space-y-3 relative p-5 border rounded-xl bg-card">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-lg flex items-center gap-2">
                                    <EyeOff className="h-5 w-5 text-red-500" />
                                    Real-time vs Batch Sync
                                </h4>
                                <div className="text-sm font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded">Critical Gap</div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg border border-blue-100 dark:border-blue-900">
                                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Sales Narrative</div>
                                    <p className="text-sm">"It pushes updates instantly to your CRM as soon as the user clicks submit."</p>
                                </div>
                                <div className="p-4 bg-orange-50/50 dark:bg-orange-950/20 rounded-lg border border-orange-100 dark:border-orange-900">
                                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">Customer Reality</div>
                                    <p className="text-sm">"Why does it take 15 minutes for leads to show up? We are missing SLA targets."</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex justify-between text-xs mb-1 text-muted-foreground">
                                        <span>Risk Score (Churn likelihood)</span>
                                        <span className="font-bold text-foreground">85%</span>
                                    </div>
                                    <Progress value={85} className="h-2 [&>div]:bg-red-500" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 relative p-5 border rounded-xl bg-card">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-lg flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-amber-500" />
                                    Custom Reporting
                                </h4>
                                <div className="text-sm font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-1 rounded">Moderate Gap</div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg border border-blue-100 dark:border-blue-900">
                                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Sales Narrative</div>
                                    <p className="text-sm">"You can build any report you want with our custom dashboard builder."</p>
                                </div>
                                <div className="p-4 bg-orange-50/50 dark:bg-orange-950/20 rounded-lg border border-orange-100 dark:border-orange-900">
                                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">Customer Reality</div>
                                    <p className="text-sm">"I can't group by geography in the custom reports, support says it's not supported?"</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex justify-between text-xs mb-1 text-muted-foreground">
                                        <span>Risk Score (Churn likelihood)</span>
                                        <span className="font-bold text-foreground">42%</span>
                                    </div>
                                    <Progress value={42} className="h-2 [&>div]:bg-amber-500" />
                                </div>
                            </div>
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

// Inline missing icon
function MessageSquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

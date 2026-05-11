import { useState } from 'react';
import { UploadDropzone } from '../../components/UploadDropzone';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Users, FileText, Download, GitBranch, GitMerge } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MeetingContradictions() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults(true);
    }, 3200);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">Meeting Contradiction Detector</h1>
        <p className="text-muted-foreground">Detect silent decision reversals and organizational misalignment across synchronized transcripts.</p>
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
            <Card className="shadow-lg border-primary/20 bg-muted/10 md:col-span-2">
              <CardHeader>
                <CardTitle>Cross-Functional Transcripts</CardTitle>
                <CardDescription>Upload transcripts from related meetings (e.g., Eng Sync, Product Sync, Go-to-Market).</CardDescription>
              </CardHeader>
              <CardContent>
                <UploadDropzone onUpload={handleUpload} maxFiles={5} accept=".txt,.json,.md" label="Upload Meeting Transcripts" />
              </CardContent>
              <CardFooter className="bg-muted/30 border-t py-4">
                  <Button variant="outline" className="w-full" onClick={handleUpload}>
                    Load Sample Startup Misalignment Dataset
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
             <div className="flex gap-4">
                 <GitBranch className="h-12 w-12 text-primary animate-pulse" />
                 <FileText className="h-12 w-12 text-muted-foreground" />
                 <GitMerge className="h-12 w-12 text-blue-500 animate-pulse" />
             </div>
             <div className="text-center space-y-2">
               <h3 className="text-2xl font-heading font-semibold">Semantic Cross-Referencing...</h3>
               <p className="text-muted-foreground">Mapping entities and commitments across 3 meeting transcripts.</p>
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
                    <Users className="h-5 w-5" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-orange-700 dark:text-orange-400">Ownership Ambiguity Detected</h4>
                   <p className="text-sm text-muted-foreground">Multiple teams believe they own the "Auth Migration" initiative.</p>
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
                        <CardTitle>Identified Contradictions</CardTitle>
                        <CardDescription>Statements from different meetings that violate logical consistency constraints.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        
                        <div className="rounded-xl border hover:shadow-md transition-shadow overflow-hidden">
                            <div className="bg-muted p-3 border-b flex items-center justify-between">
                                <span className="font-semibold flex items-center gap-2">
                                   <GitBranch className="h-4 w-4 text-orange-500" /> Topic: API Deprecation Timeline
                                </span>
                                <span className="text-xs bg-card px-2 py-1 rounded border shadow-sm text-destructive font-bold uppercase">Severity: High</span>
                            </div>
                            <div className="p-0 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-xs font-bold text-muted-foreground uppercase">Eng Weekly (Tuesday)</span>
                                    </div>
                                    <p className="text-sm italic mb-2">"We are completely dropping support for v1 endpoints on the 15th as planned. The code is already removed from main."</p>
                                    <p className="text-xs text-muted-foreground font-medium">— Sarah (Tech Lead)</p>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-bold text-muted-foreground uppercase">Key Accounts Sync (Wednesday)</span>
                                    </div>
                                    <p className="text-sm italic mb-2">"Don't worry, I told Acme Corp they have an extension until end of Q3 for the v1 API. Engineering knows."</p>
                                    <p className="text-xs text-muted-foreground font-medium">— Marcus (VP Sales)</p>
                                </div>
                            </div>
                        </div>

                         <div className="rounded-xl border hover:shadow-md transition-shadow overflow-hidden">
                            <div className="bg-muted p-3 border-b flex items-center justify-between">
                                <span className="font-semibold flex items-center gap-2">
                                   <Users className="h-4 w-4 text-amber-500" /> Topic: Ownership of Auth Flow
                                </span>
                                <span className="text-xs bg-card px-2 py-1 rounded border shadow-sm text-amber-600 font-bold uppercase">Severity: Medium</span>
                            </div>
                            <div className="p-0 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span className="text-xs font-bold text-muted-foreground uppercase">Growth Sync (Monday)</span>
                                    </div>
                                    <p className="text-sm italic mb-2">"Our team is re-writing the signup flow next sprint to optimize conversions."</p>
                                    <p className="text-xs text-muted-foreground font-medium">— Elena (Growth PM)</p>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span className="text-xs font-bold text-muted-foreground uppercase">Security Guild (Thursday)</span>
                                    </div>
                                    <p className="text-sm italic mb-2">"Security is locking down the auth components. Nobody touches signup without a security PR review first."</p>
                                    <p className="text-xs text-muted-foreground font-medium">— David (SecOps)</p>
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

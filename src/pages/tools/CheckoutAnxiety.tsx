import { useState } from 'react';
import { UploadDropzone } from '../../components/UploadDropzone';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ShoppingCart, MousePointerClick, Hourglass, ShieldAlert, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';

const ANXIETY_DATA = [
  { name: 'Pricing Ambiguity', value: 85, fill: '#ef4444' },
  { name: 'Security Reassurance', value: 62, fill: '#f97316' },
  { name: 'Shipping Costs', value: 45, fill: '#eab308' },
  { name: 'Return Policy', value: 30, fill: '#3b82f6' },
];

export default function CheckoutAnxiety() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults(true);
    }, 2400);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">Checkout Anxiety Mapper</h1>
        <p className="text-muted-foreground">Analyze interaction logs to identify psychological hesitation patterns during checkout.</p>
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
                <CardTitle>Session Interaction Logs</CardTitle>
                <CardDescription>Upload raw JSON interaction streams (mouse movements, dwell times, rage clicks).</CardDescription>
              </CardHeader>
              <CardContent>
                <UploadDropzone onUpload={handleUpload} maxFiles={3} accept=".json" label="Upload Session Data" />
              </CardContent>
              <CardFooter className="bg-muted/30 border-t py-4">
                  <Button variant="outline" className="w-full" onClick={handleUpload}>
                    Load Sample Interaction Dataset
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
                 <MousePointerClick className="h-16 w-16 text-primary animate-bounce z-10 relative" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/20 rounded-full animate-ping"></div>
             </div>
             <div className="text-center space-y-2">
               <h3 className="text-2xl font-heading font-semibold">Mapping Friction Points...</h3>
               <p className="text-muted-foreground">Analyzing dwell times and cursor hesitation across 5,000 sessions.</p>
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
                 <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-600">
                    <ShieldAlert className="h-5 w-5" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-red-700 dark:text-red-400">Critical Friction Discovered</h4>
                   <p className="text-sm text-muted-foreground">Severe hesitation near "Complete Order" due to unclear recurring billing terms.</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <Button variant="outline" size="sm" onClick={() => setResults(false)}>Reset</Button>
                 <Button size="sm"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Psychological Friction Index</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={ANXIETY_DATA}>
                            <RadialBar
                                minAngle={15}
                                background
                                clockWise
                                dataKey="value"
                                cornerRadius={10}
                            />
                            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ right: 0 }} />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Behavioral Indicators</CardTitle>
                        <CardDescription>Actions manifesting anxiety during the checkout flow.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 shrink-0 rounded bg-muted flex items-center justify-center border font-bold text-red-500">
                                4.2s
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Pre-Submit Dwell Time</h4>
                                <p className="text-sm text-muted-foreground mt-1">Users are spending over 4 seconds hovering the submit button before clicking, indicating strong hesitation or reading fine print.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 shrink-0 rounded bg-muted flex items-center justify-center border text-orange-500">
                                <Hourglass className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Scroll-Up Re-verification</h4>
                                <p className="text-sm text-muted-foreground mt-1">38% of abandoning users scroll back up to the "Order Summary" immediately after seeing the final price tier, suggesting sticker shock.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 shrink-0 rounded bg-muted flex items-center justify-center border text-blue-500">
                                <ShoppingCart className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Multi-tab Price Checking</h4>
                                <p className="text-sm text-muted-foreground mt-1">Cursor exits viewport right before final step, often returning 30-40 seconds later. Indicates seeking promo codes or competitor checks.</p>
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

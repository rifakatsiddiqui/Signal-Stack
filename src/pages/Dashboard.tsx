import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowUpRight, Activity, MessageSquare, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back. Here is the latest intelligence from your workflows.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Download Report</Button>
          <Button>Process New Data</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Detected Contradictions</CardDescription>
              <CardTitle className="text-4xl">14</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm border-l-2 border-destructive pl-4 mt-2">
                <span className="text-destructive font-medium">+3 since yesterday</span> across 2 meeting transcripts.
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Avg. Expectation Gap</CardDescription>
              <CardTitle className="text-4xl">42%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm border-l-2 border-primary pl-4 mt-2">
                <span className="text-primary font-medium">-5% improvement</span> in Support vs Sales parity.
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Critical Signals</CardDescription>
              <CardTitle className="text-4xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm border-l-2 border-orange-500 pl-4 mt-2">
                <span className="text-orange-500 font-medium">Action required</span> in Q3 refund analytics.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Insights</CardTitle>
            <CardDescription>AI-generated findings from recent uploads.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { title: "Narrative Tone Shift", tool: "Drift Tracker", toolColor: "text-blue-500", icon: Activity, desc: "CEO's Q2 summary shows a 15% decrease in definitive language regarding launch dates." },
              { title: "Sizing Confusion", tool: "Refund Decoder", toolColor: "text-purple-500", icon: MessageSquare, desc: "Cluster of 40+ returns indicate 'Medium' runs significantly smaller than industry standard." },
              { title: "Feature Mismatch", tool: "Sales Reality", toolColor: "text-orange-500", icon: AlertCircle, desc: "Sales promised 'Real-time sync' but Product architecture is 15-min batch processing." },
            ].map((insight, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-muted flex items-center justify-center">
                  <insight.icon className={`h-5 w-5 ${insight.toolColor}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{insight.title}</h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-sm">{insight.tool}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{insight.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-1 shadow-sm flex flex-col justify-between overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <Activity className="h-48 w-48" />
           </div>
           <div>
            <CardHeader className="relative z-10">
              <CardTitle>Intelligence Tools</CardTitle>
              <CardDescription>Select a module to begin analysis.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 relative z-10">
              <Link to="/app/narrative-drift" className="group flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                <div className="font-medium text-sm">Narrative Drift Tracker</div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link to="/app/refund-decoder" className="group flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                <div className="font-medium text-sm">Refund Pattern Decoder</div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link to="/app/sales-reality" className="group flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                <div className="font-medium text-sm">Sales Reality Gap</div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link to="/app/checkout-anxiety" className="group flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                <div className="font-medium text-sm">Checkout Anxiety Mapper</div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link to="/app/meeting-contradiction" className="group flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                <div className="font-medium text-sm">Meeting Contradiction Detector</div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}

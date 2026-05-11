import { motion } from 'motion/react';
import { ArrowRight, BarChart2, Workflow, MessageSquareWarning, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="h-16 px-6 lg:px-12 flex items-center justify-between border-b backdrop-blur-md bg-background/80 fixed top-0 w-full z-50">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BarChart2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-semibold text-xl tracking-tight">SignalStack</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/how-it-works" className="hover:text-foreground transition-colors">How it Works</Link>
          <Link to="/case-study" className="hover:text-foreground transition-colors">Case Study</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/docs" className="hover:text-foreground transition-colors">Documentation</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/app">
            <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          </Link>
          <Link to="/app">
            <Button>Launch Platform <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Introducing Core Intelligence Engine v2.0
        </motion.div>
        
        <motion.h1 
          className="font-heading text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Transform messy workflow data into <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">decision intelligence.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          SignalStack is a premium AI-powered intelligence platform that helps teams uncover hidden operational friction, narrative shifts, and contradictions across business workflows.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/app">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
              Start Free Trial
            </Button>
          </Link>
          <Link to="/case-study">
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              Read PM Case Study
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Product Image / Mockup Placeholder */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full mb-32">
        <motion.div 
          className="rounded-xl border bg-card shadow-2xl relative overflow-hidden aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-muted to-muted/50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
           <div className="z-10 flex flex-col items-center gap-4 text-muted-foreground">
             <Workflow className="h-16 w-16 opacity-20" />
             <p className="font-heading text-lg">Interactive Dashboard Render</p>
           </div>
        </motion.div>
      </section>

      {/* Features Outline */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-16">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-bold mb-4 tracking-tight">Intelligence tools built for product leaders.</h2>
              <p className="text-muted-foreground text-lg">We went beyond basic chatbots. SignalStack provides 5 purpose-built analytical engines that digest unstructured workflows into structured reality.</p>
            </div>
            <Link to="/how-it-works">
               <Button variant="link" className="text-primary p-0 h-auto">View platform architecture <ArrowUpRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Narrative Drift Tracker",
                desc: "Detect subtle wording shifts in financial documents to flag decaying confidence.",
                icon: BarChart2
              },
              {
                title: "Refund Pattern Decoder",
                desc: "Analyze qualitative return reasons to find operational root causes.",
                icon: MessageSquareWarning
              },
              {
                title: "Sales Reality Gap",
                desc: "Identify when sales promises diverge from actual customer experiences.",
                icon: Shield
              }
            ].map((feature, i) => (
              <div key={i} className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-6 lg:px-12 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-primary text-primary-foreground flex items-center justify-center">
            <BarChart2 className="h-3 w-3" />
          </div>
          <span className="font-medium text-foreground">SignalStack</span>
        </div>
        <p>&copy; {new Date().getFullYear()} SignalStack UI. Built for Product Portfolios.</p>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground">Terms</Link>
        </div>
      </footer>
    </div>
  );
}

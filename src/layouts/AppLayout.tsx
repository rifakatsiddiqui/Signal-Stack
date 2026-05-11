import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  BarChart2, 
  MessageSquare, 
  Activity, 
  ShoppingCart, 
  Users,
  Settings as SettingsIcon,
  Database,
  Search,
  Zap,
  Menu,
  Moon,
  Sun
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { ScrollArea } from '../components/ui/scroll-area';
import { Separator } from '../components/ui/separator';
import { useTheme } from '../components/ThemeProvider';

const TOOLS = [
  { name: 'Narrative Drift', icon: Activity, path: '/app/narrative-drift' },
  { name: 'Refund Decoder', icon: MessageSquare, path: '/app/refund-decoder' },
  { name: 'Sales Reality Gap', icon: BarChart2, path: '/app/sales-reality' },
  { name: 'Checkout Anxiety', icon: ShoppingCart, path: '/app/checkout-anxiety' },
  { name: 'Meeting Aligner', icon: Users, path: '/app/meeting-contradiction' },
];

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r bg-card shadow-sm transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 hidden lg:flex flex-col",
        sidebarOpen ? "flex translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center h-16 px-6 border-b">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground transition-transform group-hover:scale-110" />
            </div>
            <span className="font-heading font-semibold text-lg tracking-tight">SignalStack</span>
          </Link>
        </div>

        <ScrollArea className="flex-1 px-4 py-4">
          <div className="space-y-1 mb-8">
            <Link to="/app">
              <Button variant={location.pathname === '/app' ? 'secondary' : 'ghost'} className="w-full justify-start gap-2">
                <BarChart2 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </div>

          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
            Intelligence Tools
          </div>
          <div className="space-y-1">
            {TOOLS.map((tool) => (
              <Link key={tool.path} to={tool.path}>
                <Button 
                  variant={location.pathname === tool.path ? 'secondary' : 'ghost'} 
                  className={cn("w-full justify-start gap-2", location.pathname === tool.path && "font-medium")}
                >
                  <tool.icon className="h-4 w-4" />
                  {tool.name}
                </Button>
              </Link>
            ))}
          </div>
          
          <Separator className="my-6" />

          <div className="space-y-1">
            <Link to="/app/sample-data">
              <Button variant={location.pathname === '/app/sample-data' ? 'secondary' : 'ghost'} className="w-full justify-start gap-2">
                <Database className="h-4 w-4" />
                Sample Data
              </Button>
            </Link>
            <Link to="/app/settings">
              <Button variant={location.pathname === '/app/settings' ? 'secondary' : 'ghost'} className="w-full justify-start gap-2">
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Button>
            </Link>
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              JS
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-medium">Jane Smith</span>
              <span className="text-xs text-muted-foreground">Pro Plan</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 bg-muted/30">
        <header className="h-16 flex items-center justify-between px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-30">
          <div className="flex items-center gap-4 lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <span className="font-heading font-semibold text-lg tracking-tight">SignalStack</span>
          </div>
          
          <div className="hidden lg:flex items-center relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search workflows, insights, or datasets..."
              className="w-full bg-muted/50 border-none rounded-full h-9 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
             <Button 
               variant="ghost" 
               size="icon" 
               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
             >
               {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
             </Button>
             <Button variant="outline" size="sm" className="hidden sm:flex">
               Share Report
             </Button>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

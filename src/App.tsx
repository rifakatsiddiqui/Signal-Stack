import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { AppLayout } from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NarrativeDrift from './pages/tools/NarrativeDrift';
import RefundDecoder from './pages/tools/RefundDecoder';
import SalesReality from './pages/tools/SalesReality';
import CheckoutAnxiety from './pages/tools/CheckoutAnxiety';
import MeetingContradictions from './pages/tools/MeetingContradictions';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import CaseStudy from './pages/CaseStudy';
import SampleData from './pages/SampleData';
import Settings from './pages/Settings';
import Documentation from './pages/Documentation';
import { TooltipProvider } from './components/ui/tooltip';

export default function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/docs" element={<Documentation />} />
            
            {/* App Layout for the tools and dashboard */}
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="narrative-drift" element={<NarrativeDrift />} />
              <Route path="refund-decoder" element={<RefundDecoder />} />
              <Route path="sales-reality" element={<SalesReality />} />
              <Route path="checkout-anxiety" element={<CheckoutAnxiety />} />
              <Route path="meeting-contradiction" element={<MeetingContradictions />} />
              <Route path="sample-data" element={<SampleData />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
}

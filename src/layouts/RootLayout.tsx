import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../components/ThemeProvider';

export function RootLayout() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="signalstack-theme">
      <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}

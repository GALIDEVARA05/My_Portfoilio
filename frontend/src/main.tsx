import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast' // ✅ NEW import

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
    <>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  </ThemeProvider>
);

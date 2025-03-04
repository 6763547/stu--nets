
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add viewport meta tag to ensure mobile responsiveness
document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('meta[name="viewport"]')) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
  }
});

createRoot(document.getElementById("root")!).render(<App />);

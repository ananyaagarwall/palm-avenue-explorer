import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import fonts
import '@fontsource/abril-fatface'
import '@fontsource/red-hat-display/400.css'
import '@fontsource/red-hat-display/500.css'
import '@fontsource/red-hat-display/600.css'
import '@fontsource/red-hat-display/700.css'
import '@fontsource/red-hat-mono'

createRoot(document.getElementById("root")!).render(<App />);

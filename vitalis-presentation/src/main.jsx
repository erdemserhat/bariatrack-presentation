import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default defineConfig({
  base: "/static/vitalis/", // Ensures assets use the correct path
  plugins: [react()],
});


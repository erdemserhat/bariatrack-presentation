import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/static/vitalis/", // Ensures assets use the correct path
  plugins: [react()],
});


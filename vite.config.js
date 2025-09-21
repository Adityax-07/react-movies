import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['g76qsn-5173.csb.app'], // ✅ yaha likhna hai
    port: 5173, // optional: agar specific port chahiye
  },
})

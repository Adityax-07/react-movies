import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      'g76qsn-5173.csb.app',  // Codesandbox ka host
      'localhost',           // local dev ke liye
      '127.0.0.1',           // yeh host allow karna hai
    ],
  },
})

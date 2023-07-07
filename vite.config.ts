import { defineConfig } from 'vite'
import dns from 'node:dns'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/server-options.html#server-host
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3000,
    strictPort: true,
  },
  plugins: [react()],
})

import { defineConfig } from 'vite'
import dns from 'node:dns'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/server-options.html#server-host
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     open: true,
//     port: 3000,
//     strictPort: true,
//   },
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
  },
  });
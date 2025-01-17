import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DVCS-SERVER/', // Ścieżka odpowiadająca nazwie repozytorium
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DVCS-SERVER/', // Dopasuj do nazwy swojego repozytorium
  build: {
    outDir: 'build', // Domyślny folder wynikowy
  },
});
